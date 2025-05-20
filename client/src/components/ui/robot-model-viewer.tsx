import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Loader2 } from 'lucide-react';

interface RobotModelViewerProps {
  modelUrl: string;
  width?: string;
  height?: string;
}

const RobotModelViewer: React.FC<RobotModelViewerProps> = ({
  modelUrl,
  width = '100%',
  height = '400px',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    let animationFrameId: number;
    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;
    let renderer: THREE.WebGLRenderer;
    let model: THREE.Object3D;
    let controls: any;
    
    // Setup scene
    const setupScene = () => {
      // Create scene
      scene = new THREE.Scene();
      scene.background = new THREE.Color(0xf5f8ff); // Light blue-tinted background
      
      // Create camera
      const container = containerRef.current;
      const aspect = container ? container.clientWidth / container.clientHeight : 1;
      camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);
      camera.position.z = 5;
      
      // Create renderer
      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      if (container) {
        renderer.setSize(container.clientWidth, container.clientHeight);
        container.appendChild(renderer.domElement);
      }
      
      // Add lights
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambientLight);
      
      const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
      directionalLight.position.set(1, 1, 1);
      scene.add(directionalLight);
      
      // For OnShape embedded iframe, we'll use a placeholder cube for now
      // In production, this would be replaced with actual OnShape iframe or model loading
      const geometry = new THREE.BoxGeometry(2, 2, 2);
      const material = new THREE.MeshStandardMaterial({ 
        color: 0x1a36e8,
        metalness: 0.5,
        roughness: 0.5
      });
      model = new THREE.Mesh(geometry, material);
      scene.add(model);
      
      // Add mouse controls for rotation
      setupMouseControls();
      
      // Animation loop
      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);
        
        if (model) {
          model.rotation.y += 0.005;
        }
        
        renderer.render(scene, camera);
      };
      
      animate();
      setIsLoading(false);
    };
    
    // Setup mouse controls for model rotation
    const setupMouseControls = () => {
      let isDragging = false;
      let previousMousePosition = { x: 0, y: 0 };
      
      const onMouseDown = (e: MouseEvent) => {
        isDragging = true;
        previousMousePosition = { x: e.clientX, y: e.clientY };
      };
      
      const onMouseMove = (e: MouseEvent) => {
        if (!isDragging) return;
        
        const deltaMove = {
          x: e.clientX - previousMousePosition.x,
          y: e.clientY - previousMousePosition.y
        };
        
        if (model) {
          model.rotation.y += deltaMove.x * 0.01;
          model.rotation.x += deltaMove.y * 0.01;
        }
        
        previousMousePosition = { x: e.clientX, y: e.clientY };
      };
      
      const onMouseUp = () => {
        isDragging = false;
      };
      
      if (containerRef.current) {
        containerRef.current.addEventListener('mousedown', onMouseDown);
        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseup', onMouseUp);
      }
      
      return () => {
        if (containerRef.current) {
          containerRef.current.removeEventListener('mousedown', onMouseDown);
        }
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('mouseup', onMouseUp);
      };
    };
    
    // Initialize everything
    try {
      setupScene();
    } catch (err) {
      console.error('Error setting up 3D scene:', err);
      setError('Failed to load 3D model');
      setIsLoading(false);
    }
    
    // Cleanup function
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      
      if (renderer && containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, [modelUrl]);
  
  // Handle window resizing
  useEffect(() => {
    const handleResize = () => {
      if (!containerRef.current) return;
      
      // Force rerender on resize instead of trying to access renderer directly
      setIsLoading(true);
      setTimeout(() => setIsLoading(false), 100);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <div className="relative" style={{ width, height }}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white dark:bg-zinc-900 bg-opacity-90 dark:bg-opacity-90 z-10">
          <div className="text-center">
            <img 
              src="/images/logos/ChargerBolt.png" 
              alt="Charging" 
              className="h-12 w-auto mx-auto mb-2 animate-pulse" 
            />
            <p className="text-[#0a1a70] dark:text-blue-300 font-medium">Loading 3D model...</p>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">This may take a moment</p>
          </div>
        </div>
      )}
      
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-red-50 dark:bg-red-950/30 z-10">
          <div className="text-center p-4">
            <p className="text-red-600 dark:text-red-400 font-medium">{error}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Try refreshing the page</p>
          </div>
        </div>
      )}
      
      <div 
        ref={containerRef} 
        className="w-full h-full"
        style={{ cursor: 'grab' }}
      />
      
      {!isLoading && !error && (
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-[#1a36e8] bg-opacity-80 text-white text-xs px-3 py-1 rounded-full shadow-md">
          Click and drag to rotate • Scroll to zoom
        </div>
      )}
    </div>
  );
};

export default RobotModelViewer;