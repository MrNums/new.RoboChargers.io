import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  FileText,
  FileCog,
  Code,
  Book,
  Download,
  Shield,
  Search,
  BookOpen,
  Wrench,
  FileSpreadsheet,
  ExternalLink,
} from "lucide-react";
import { resources, Resource } from "@/lib/data";
import CTASection from "@/components/CTASection";

const ResourceIcon = ({ category }: { category: string }) => {
  switch (category) {
    case "documents":
      return <FileText className="h-5 w-5" />;
    case "cad":
      return <FileCog className="h-5 w-5" />;
    case "programming":
      return <Code className="h-5 w-5" />;
    case "notebook":
      return <Book className="h-5 w-5" />;
    case "safety":
      return <Shield className="h-5 w-5" />;
    case "engineering":
      return <Wrench className="h-5 w-5" />;
    case "outreach":
      return <BookOpen className="h-5 w-5" />;
    default:
      return <FileText className="h-5 w-5" />;
  }
};

const ResourceList = ({
  resources,
  category,
}: {
  resources: Resource[];
  category: string;
}) => {
  const filteredResources = category === "all" 
    ? resources 
    : resources.filter((resource) => resource.category === category);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[400px]">Resource</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Added</TableHead>
          <TableHead className="text-right">Download</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {filteredResources.map((resource) => (
          <TableRow key={resource.id}>
            <TableCell>
              <div className="flex items-start">
                <div className="mr-3 mt-1 text-[#1a36e8]">
                  <ResourceIcon category={resource.category} />
                </div>
                <div>
                  <div className="font-semibold">{resource.title}</div>
                  <div className="text-sm text-gray-500">{resource.description}</div>
                </div>
              </div>
            </TableCell>
            <TableCell>{resource.type}</TableCell>
            <TableCell>{resource.dateAdded}</TableCell>
            <TableCell className="text-right">
              <Button
                size="sm"
                variant="outline"
                className="text-[#1a36e8] hover:bg-[#1a36e8] hover:text-white"
                asChild
              >
                <a href={resource.fileUrl} target="_blank" rel="noopener noreferrer">
                  <Download className="h-4 w-4 mr-1" /> Download
                </a>
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

const Resources: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredResources = resources.filter((resource) =>
    resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    resource.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Helmet>
        <title>Resources - RoboChargers</title>
        <meta
          name="description"
          content="Access team documents, CAD files, programming guides, and other resources from the RoboChargers robotics team."
        />
      </Helmet>

      <div className="bg-[#0a1a70] text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Resources</h1>
          <p className="text-xl">
            Access team documents, CAD files, programming guides, and other
            resources.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold">Team Resources</h2>
            <div className="relative w-full md:w-64">
              <Search className="absolute left-2 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search resources..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        <Tabs defaultValue="all" className="max-w-5xl mx-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 mb-8">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="documents" id="documents">Documents</TabsTrigger>
            <TabsTrigger value="cad" id="cad">CAD Files</TabsTrigger>
            <TabsTrigger value="programming" id="programming">Programming</TabsTrigger>
            <TabsTrigger value="notebook" id="notebook">Notebook</TabsTrigger>
            <TabsTrigger value="safety" id="safety">Safety</TabsTrigger>
            <TabsTrigger value="engineering">Engineering</TabsTrigger>
            <TabsTrigger value="outreach">Outreach</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <Card>
              <CardHeader>
                <CardTitle>All Resources</CardTitle>
                <CardDescription>
                  Access all team resources, documents, and files
                </CardDescription>
              </CardHeader>
              <CardContent>
                {filteredResources.length > 0 ? (
                  <ResourceList resources={filteredResources} category="all" />
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-500">No resources found matching your search.</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="documents">
            <Card>
              <CardHeader>
                <CardTitle>Team Documents</CardTitle>
                <CardDescription>
                  Official team documentation, handbooks, and game manuals
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResourceList resources={filteredResources} category="documents" />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="cad">
            <Card>
              <CardHeader>
                <CardTitle>CAD Files</CardTitle>
                <CardDescription>
                  Robot CAD models and OnShape class materials
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResourceList resources={filteredResources} category="cad" />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="programming">
            <Card>
              <CardHeader>
                <CardTitle>Programming Resources</CardTitle>
                <CardDescription>
                  Programming guides, code samples, and documentation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResourceList resources={filteredResources} category="programming" />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notebook">
            <Card>
              <CardHeader>
                <CardTitle>Engineering Notebook</CardTitle>
                <CardDescription>
                  Engineering notebook templates and examples
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResourceList resources={filteredResources} category="notebook" />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="safety">
            <Card>
              <CardHeader>
                <CardTitle>Safety Materials</CardTitle>
                <CardDescription>
                  Safety guidelines, procedures, and training materials
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResourceList resources={filteredResources} category="safety" />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="engineering">
            <Card>
              <CardHeader>
                <CardTitle>Engineering Resources</CardTitle>
                <CardDescription>
                  Technical documentation, calculations, and reference materials
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResourceList resources={filteredResources} category="engineering" />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="outreach">
            <Card>
              <CardHeader>
                <CardTitle>Outreach Materials</CardTitle>
                <CardDescription>
                  Sponsorship packages, brochures, and presentation materials
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResourceList resources={filteredResources} category="outreach" />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-16 max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">External Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <img 
                    src="https://www.firstinspires.org/sites/default/files/uploads/resource_library/brand/FRC-thumb.jpg" 
                    alt="FIRST Robotics Competition" 
                    className="h-8 w-auto mr-2" 
                  />
                  FIRST Resources
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Official resources from FIRST Robotics including game manuals, technical resources, and competition information.
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <a href="https://www.firstinspires.org/resource-library/frc/competition-manual-qa-system" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" /> Visit FIRST Resource Library
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileSpreadsheet className="h-6 w-6 mr-2 text-[#1a36e8]" />
                  Chief Delphi
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Community forum for FIRST Robotics teams to share knowledge, ask questions, and discuss robotics engineering.
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <a href="https://www.chiefdelphi.com/" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" /> Visit Chief Delphi
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Code className="h-6 w-6 mr-2 text-[#1a36e8]" />
                  WPILib Documentation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Documentation for the WPILib library, the standard programming library used in FRC competitions.
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <a href="https://docs.wpilib.org/" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" /> Visit WPILib Docs
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-16 bg-gray-100 rounded-lg p-8 max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-center">OnShape CAD Class</h2>
          <div className="text-center mb-6">
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our team offers an OnShape CAD class to help students learn computer-aided design skills for robotics. 
              The class covers basic to advanced CAD techniques, with a focus on FRC and FTC robot design.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Button className="bg-[#1a36e8] hover:bg-[#0a1a70]" asChild>
              <a href="/resources/OnShapeClass.zip">
                <Download className="h-4 w-4 mr-2" /> Download Class Materials
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://www.onshape.com/en/education/sign-up" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" /> Sign Up for OnShape (Free)
              </a>
            </Button>
          </div>
        </div>
      </div>

      <CTASection />
    </>
  );
};

export default Resources;
