import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/hooks/use-auth';
import { Redirect } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { MoreHorizontal, RefreshCw, Trash2, Shield, UserPlus, Users, Key } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';

// Type for users
interface User {
  id: string;
  username: string;
  role: 'admin' | 'member';
  createdAt: string;
  status: 'active' | 'inactive';
}

// Form schemas
const addUserSchema = z.object({
  username: z.string().min(3, { message: 'Username must be at least 3 characters' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
  role: z.enum(['admin', 'member']),
});

const changePasswordSchema = z.object({
  currentPassword: z.string().min(1, { message: 'Current password is required' }),
  newPassword: z.string().min(6, { message: 'New password must be at least 6 characters' }),
  confirmPassword: z.string().min(6, { message: 'Confirm password must be at least 6 characters' }),
}).refine(data => data.newPassword === data.confirmPassword, {
  message: "New password and confirm password don't match",
  path: ["confirmPassword"],
});

// Mock data for users
const mockUsers: User[] = [
  { id: '1', username: 'admin', role: 'admin', createdAt: '2025-04-01', status: 'active' },
  { id: '2', username: 'member1', role: 'member', createdAt: '2025-04-02', status: 'active' },
  { id: '3', username: 'member2', role: 'member', createdAt: '2025-04-03', status: 'inactive' },
];

export default function AdminPage() {
  const { user } = useAuth();
  const { toast } = useToast();
  const [users, setUsers] = useState<User[]>(mockUsers);
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
  const [isUserDialogOpen, setIsUserDialogOpen] = useState(false);
  const [isPasswordDialogOpen, setIsPasswordDialogOpen] = useState(false);
  const [maintenanceMode, setMaintenanceMode] = useState(false);

  // Forms
  const addUserForm = useForm<z.infer<typeof addUserSchema>>({
    resolver: zodResolver(addUserSchema),
    defaultValues: {
      username: '',
      password: '',
      role: 'member',
    },
  });

  const passwordForm = useForm<z.infer<typeof changePasswordSchema>>({
    resolver: zodResolver(changePasswordSchema),
    defaultValues: {
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
  });

  // Check if user is admin
  const isAdmin = user?.username === 'admin'; // In a real app, you'd check the user's role

  // If not an admin, redirect to the home page
  if (!isAdmin) {
    return <Redirect to="/" />;
  }

  // Submit handlers
  const onAddUserSubmit = (values: z.infer<typeof addUserSchema>) => {
    // Here you would make an API call to create a new user
    const newUser: User = {
      id: String(users.length + 1),
      username: values.username,
      role: values.role,
      createdAt: new Date().toISOString().split('T')[0],
      status: 'active',
    };
    
    setUsers([...users, newUser]);
    setIsUserDialogOpen(false);
    addUserForm.reset();
    
    toast({
      title: 'User created',
      description: `User ${values.username} has been created successfully`,
    });
  };

  const onPasswordSubmit = (values: z.infer<typeof changePasswordSchema>) => {
    // Here you would make an API call to change the password
    toast({
      title: 'Password changed',
      description: 'Your password has been changed successfully',
    });
    
    setIsPasswordDialogOpen(false);
    passwordForm.reset();
  };

  const toggleUserStatus = (userId: string) => {
    // Here you would make an API call to toggle the user status
    setUsers(users.map(user => 
      user.id === userId 
        ? { ...user, status: user.status === 'active' ? 'inactive' : 'active' } 
        : user
    ));
    
    const updatedUser = users.find(user => user.id === userId);
    const newStatus = updatedUser?.status === 'active' ? 'inactive' : 'active';
    
    toast({
      title: 'User status updated',
      description: `User ${updatedUser?.username} is now ${newStatus}`,
    });
  };

  const deleteUser = (userId: string) => {
    // Here you would make an API call to delete the user
    const userToDelete = users.find(user => user.id === userId);
    setUsers(users.filter(user => user.id !== userId));
    
    toast({
      title: 'User deleted',
      description: `User ${userToDelete?.username} has been deleted`,
      variant: 'destructive',
    });
  };

  const toggleMaintenanceMode = () => {
    // Here you would make an API call to toggle the maintenance mode
    setMaintenanceMode(!maintenanceMode);
    
    toast({
      title: 'Maintenance mode',
      description: `Maintenance mode is now ${!maintenanceMode ? 'enabled' : 'disabled'}`,
    });
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-[#0a1a70]">Admin Dashboard</h1>
      
      <Tabs defaultValue="users" className="max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>
        
        {/* Users Tab */}
        <TabsContent value="users">
          <Card>
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <div className="flex items-center">
                  <Users className="h-6 w-6 mr-2 text-[#1a36e8]" />
                  User Management
                </div>
                <Button 
                  onClick={() => setIsUserDialogOpen(true)}
                  className="bg-[#1a36e8] hover:bg-[#0a1a70]"
                >
                  <UserPlus className="h-4 w-4 mr-2" />
                  Add User
                </Button>
              </CardTitle>
              <CardDescription>
                Manage user accounts and permissions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="py-3 text-left">Username</th>
                      <th className="py-3 text-left">Role</th>
                      <th className="py-3 text-left">Created</th>
                      <th className="py-3 text-left">Status</th>
                      <th className="py-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => (
                      <tr key={user.id} className="border-b hover:bg-gray-50">
                        <td className="py-3">{user.username}</td>
                        <td className="py-3">
                          <Badge variant={user.role === 'admin' ? 'destructive' : 'secondary'}>
                            {user.role}
                          </Badge>
                        </td>
                        <td className="py-3">{user.createdAt}</td>
                        <td className="py-3">
                          <Badge variant={user.status === 'active' ? 'outline' : 'secondary'}>
                            {user.status}
                          </Badge>
                        </td>
                        <td className="py-3 text-right">
                          <div className="flex justify-end space-x-2">
                            <Button 
                              variant="ghost" 
                              size="sm"
                              onClick={() => toggleUserStatus(user.id)}
                              title={user.status === 'active' ? 'Deactivate user' : 'Activate user'}
                            >
                              <RefreshCw className="h-4 w-4" />
                            </Button>
                            <Button 
                              variant="ghost" 
                              size="sm"
                              onClick={() => deleteUser(user.id)}
                              title="Delete user"
                              className="text-red-500 hover:text-red-700 hover:bg-red-50"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Settings Tab */}
        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="h-6 w-6 mr-2 text-[#1a36e8]" />
                System Settings
              </CardTitle>
              <CardDescription>
                Configure website settings and maintenance mode
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between border-b pb-4">
                <div>
                  <h3 className="font-medium text-lg">Maintenance Mode</h3>
                  <p className="text-gray-500 text-sm">
                    When enabled, only team members can access the website using activation codes
                  </p>
                </div>
                <Switch 
                  checked={maintenanceMode} 
                  onCheckedChange={toggleMaintenanceMode} 
                />
              </div>
              
              <div className="border-b pb-4">
                <h3 className="font-medium text-lg mb-2">Activation Codes</h3>
                <p className="text-gray-500 text-sm mb-4">
                  Generate and manage activation codes for team members
                </p>
                
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between bg-gray-50 p-3 rounded">
                    <code className="font-mono bg-gray-100 px-2 py-1 rounded">ROBO-2025-TEAM</code>
                    <Badge>Active</Badge>
                  </div>
                  <div className="flex items-center justify-between bg-gray-50 p-3 rounded">
                    <code className="font-mono bg-gray-100 px-2 py-1 rounded">CHARGERS-2025</code>
                    <Badge variant="outline">Expired</Badge>
                  </div>
                </div>
                
                <Button className="mt-4 bg-[#1a36e8] hover:bg-[#0a1a70]">
                  Generate New Code
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Security Tab */}
        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Key className="h-6 w-6 mr-2 text-[#1a36e8]" />
                Security Settings
              </CardTitle>
              <CardDescription>
                Manage your account security
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="border-b pb-4">
                <h3 className="font-medium text-lg mb-2">Your Account</h3>
                <p className="text-gray-500 text-sm">
                  Username: <span className="font-medium">{user?.username}</span>
                </p>
                <p className="text-gray-500 text-sm">
                  Role: <span className="font-medium">Administrator</span>
                </p>
                
                <Button 
                  onClick={() => setIsPasswordDialogOpen(true)} 
                  className="mt-4 bg-[#1a36e8] hover:bg-[#0a1a70]"
                >
                  Change Password
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      {/* Add User Dialog */}
      <Dialog open={isUserDialogOpen} onOpenChange={setIsUserDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add New User</DialogTitle>
            <DialogDescription>
              Create a new user account
            </DialogDescription>
          </DialogHeader>
          <Form {...addUserForm}>
            <form onSubmit={addUserForm.handleSubmit(onAddUserSubmit)} className="space-y-4">
              <FormField
                control={addUserForm.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter username" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={addUserForm.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="Enter password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={addUserForm.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Role</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select role" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="admin">Admin</SelectItem>
                        <SelectItem value="member">Team Member</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <DialogFooter>
                <Button type="submit" className="bg-[#1a36e8] hover:bg-[#0a1a70]">
                  Create User
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
      
      {/* Change Password Dialog */}
      <Dialog open={isPasswordDialogOpen} onOpenChange={setIsPasswordDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Change Password</DialogTitle>
            <DialogDescription>
              Update your account password
            </DialogDescription>
          </DialogHeader>
          <Form {...passwordForm}>
            <form onSubmit={passwordForm.handleSubmit(onPasswordSubmit)} className="space-y-4">
              <FormField
                control={passwordForm.control}
                name="currentPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Current Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="Enter current password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={passwordForm.control}
                name="newPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>New Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="Enter new password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={passwordForm.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="Confirm new password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <DialogFooter>
                <Button type="submit" className="bg-[#1a36e8] hover:bg-[#0a1a70]">
                  Update Password
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
}