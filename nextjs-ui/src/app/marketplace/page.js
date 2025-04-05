"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { StarIcon, Download, Tag, Zap } from "lucide-react";

// Marketplace item component
const MarketplaceItem = ({ item, onViewDetails }) => {
  return (
    <Card className="group hover:border-primary transition-all duration-300">
      <CardContent className="p-5">
        <div className="flex items-start justify-between">
          <div className="flex gap-4">
            <div className="rounded-lg w-12 h-12 bg-primary/10 flex items-center justify-center">
              {item.type === "workflow" && <Zap className="h-6 w-6 text-primary" />}
              {item.type === "pipeline" && <Tag className="h-6 w-6 text-primary" />}
              {item.type === "agent" && (
                <svg className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 11C9 12.1046 8.10457 13 7 13C5.89543 13 5 12.1046 5 11C5 9.89543 5.89543 9 7 9C8.10457 9 9 9.89543 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M19 11C19 12.1046 18.1046 13 17 13C15.8954 13 15 12.1046 15 11C15 9.89543 15.8954 9 17 9C18.1046 9 19 9.89543 19 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 21C16.4183 21 20 17.4183 20 13V7C20 5.89543 19.1046 5 18 5H6C4.89543 5 4 5.89543 4 7V13C4 17.4183 7.58172 21 12 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
              {item.type === "chatflow" && (
                <svg className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.8214 2.48697 15.5291 3.33782 17L2.5 21.5L7 20.6622C8.47087 21.513 10.1786 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 12H8.01M12 12H12.01M16 12H16.01M8.2 12C8.2 12.1105 8.10964 12.2 8 12.2C7.89036 12.2 7.8 12.1105 7.8 12C7.8 11.8895 7.89036 11.8 8 11.8C8.10964 11.8 8.2 11.8895 8.2 12ZM12.2 12C12.2 12.1105 12.1096 12.2 12 12.2C11.8904 12.2 11.8 12.1105 11.8 12C11.8 11.8895 11.8904 11.8 12 11.8C12.1096 11.8 12.2 11.8895 12.2 12ZM16.2 12C16.2 12.1105 16.1096 12.2 16 12.2C15.8904 12.2 15.8 12.1105 15.8 12C15.8 11.8895 15.8904 11.8 16 11.8C16.1096 11.8 16.2 11.8895 16.2 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-medium">{item.name}</h3>
                <Badge variant="outline" className="text-xs">{item.type}</Badge>
                {item.premium && <Badge className="bg-amber-500 text-xs">Premium</Badge>}
              </div>
              <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
              <div className="flex items-center gap-4 mt-2">
                <div className="flex items-center text-amber-500">
                  <StarIcon className="h-4 w-4 mr-1" />
                  <span className="text-xs">{item.rating}</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Download className="h-4 w-4 mr-1" />
                  <span className="text-xs">{item.downloads}</span>
                </div>
                <div className="text-xs text-muted-foreground">By {item.creator}</div>
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="mb-2 font-medium">
              {item.price === 0 ? (
                <span className="text-green-500">Free</span>
              ) : (
                <span>${item.price}</span>
              )}
            </div>
            <Button 
              size="sm" 
              variant="outline" 
              className="text-xs"
              onClick={() => onViewDetails(item)}
            >
              View Details
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default function MarketplaceSection({ isAuthenticated, handleLogin }) {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedItem, setSelectedItem] = useState(null);

  // Sample marketplace data
  const marketplaceItems = [
    {
      id: 1,
      name: "Email Marketing Automation",
      type: "workflow",
      description: "Complete email marketing workflow with segmentation and analytics",
      rating: 4.8,
      downloads: 2540,
      creator: "Noyco Team",
      price: 49.99,
      premium: true
    },
    {
      id: 2,
      name: "Customer Support Bot",
      type: "chatflow",
      description: "AI-powered customer support automation for common inquiries",
      rating: 4.5,
      downloads: 1876,
      creator: "AI Solutions",
      price: 29.99,
      premium: true
    },
    {
      id: 3,
      name: "Data Processing Pipeline",
      type: "pipeline",
      description: "ETL pipeline for cleaning and transforming CSV data",
      rating: 4.2,
      downloads: 984,
      creator: "DataWorks",
      price: 0,
      premium: false
    },
    {
      id: 4,
      name: "Social Media Manager",
      type: "agent",
      description: "Automated agent for scheduling and posting content across platforms",
      rating: 4.7,
      downloads: 3210,
      creator: "MarketingPro",
      price: 39.99,
      premium: true
    },
    {
      id: 5,
      name: "Invoice Processing",
      type: "workflow",
      description: "Extract data from invoices and integrate with accounting software",
      rating: 4.4,
      downloads: 1254,
      creator: "FinTech Solutions",
      price: 0,
      premium: false
    },
    {
      id: 6,
      name: "Lead Generation Assistant",
      type: "chatflow",
      description: "Conversational AI for qualifying leads and scheduling meetings",
      rating: 4.9,
      downloads: 2105,
      creator: "SalesBoost",
      price: 59.99,
      premium: true
    }
  ];

  const filteredItems = activeTab === "all" 
    ? marketplaceItems 
    : marketplaceItems.filter(item => item.type === activeTab);

  const handleViewDetails = (item) => {
    if (!isAuthenticated) {
      handleLogin();
      return;
    }
    setSelectedItem(item);
    // In a real application, this would navigate to a details page or open a modal
    console.log("View details for:", item);
  };

  return (
    <section className="py-12">
      <div className="container px-4">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Marketplace</h2>
          <p className="text-muted-foreground">
            Discover ready-to-use workflows, pipelines, agents, and chatflows created by our community and experts
          </p>
        </div>
        
        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="workflow">Workflows</TabsTrigger>
            <TabsTrigger value="pipeline">Pipelines</TabsTrigger>
            <TabsTrigger value="agent">Agents</TabsTrigger>
            <TabsTrigger value="chatflow">Chatflows</TabsTrigger>
          </TabsList>
          
          <TabsContent value={activeTab} className="mt-0">
            <div className="grid grid-cols-1 gap-4">
              {filteredItems.map((item) => (
                <MarketplaceItem 
                  key={item.id} 
                  item={item} 
                  onViewDetails={handleViewDetails} 
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="mt-8 text-center">
          <Button>
            Browse More
          </Button>
        </div>
      </div>
    </section>
  );
}