"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Star,
  Download,
  User,
  Zap,
  FileText,
  Bot,
  MessageCircle,
} from "lucide-react";

// Helper function to render the appropriate icon based on item type
const getItemIcon = (type) => {
  switch (type) {
    case "workflow":
      return <Zap className="h-6 w-6 text-yellow-500" />;
    case "pipeline":
      return <FileText className="h-6 w-6 text-green-500" />;
    case "agent":
      return <Bot className="h-6 w-6 text-blue-500" />;
    case "chatflow":
      return <MessageCircle className="h-6 w-6 text-purple-500" />;
    default:
      return <FileText className="h-6 w-6" />;
  }
};

// Star rating component
function StarRating({ rating }) {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < Math.floor(rating)
              ? "text-yellow-400 fill-yellow-400"
              : i < rating
              ? "text-yellow-400 fill-yellow-400 opacity-50"
              : "text-gray-300"
          }`}
        />
      ))}
      <span className="ml-1 text-sm text-muted-foreground">
        {rating.toFixed(1)}
      </span>
    </div>
  );
}

// Marketplace item component
const MarketplaceItem = ({ item, onViewDetails }) => {
  return (
    <Card className="group relative rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden p-3 hover:border-primary hover:shadow-lg dark:hover:shadow-primary/20 transition-all duration-300 cursor-pointer">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      <CardHeader className="p-3 pb-1 flex items-start">
        <div className="flex justify-between w-full">
          <div className="flex items-center space-x-2">
            {getItemIcon(item.type)}
            <Badge variant="outline" className="capitalize text-xs">
              {item.type}
            </Badge>
          </div>
          {item.price ? (
            <Badge variant="secondary" className="text-xs">
              ${item.price}
            </Badge>
          ) : (
            <Badge
              variant="outline"
              className="bg-green-500/10 text-green-600 border-green-200 text-xs"
            >
              Free
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-3 pt-1">
        <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
        <p className="text-xs text-muted-foreground mb-2">{item.description}</p>
        <div className="flex items-center justify-between mb-1">
          <StarRating rating={item.rating} />
          <div className="flex items-center text-xs text-muted-foreground">
            <Download className="h-3 w-3 mr-1" />
            {item.downloads.toLocaleString()}
          </div>
        </div>
        <div className="flex items-center text-xs text-muted-foreground">
          <User className="h-3 w-3 mr-1" />
          {item.creator}
        </div>
      </CardContent>
      <CardFooter className="p-3 pt-1">
        <Button
          variant="outline"
          className="w-full text-xs"
          onClick={() => onViewDetails(item)}
        >
          View Details
        </Button>
      </CardFooter>
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
      description:
        "Complete email marketing workflow with segmentation and analytics",
      rating: 4.8,
      downloads: 2540,
      creator: "Noyco Team",
      price: 49.99,
      premium: true,
    },
    {
      id: 2,
      name: "Customer Support Bot",
      type: "chatflow",
      description:
        "AI-powered customer support automation for common inquiries",
      rating: 4.5,
      downloads: 1876,
      creator: "Noyco Team",
      price: 29.99,
      premium: true,
    },
    {
      id: 3,
      name: "Data Processing Pipeline",
      type: "pipeline",
      description: "ETL pipeline for cleaning and transforming CSV data",
      rating: 4.2,
      downloads: 984,
      creator: "Noyco Team",
      price: 0,
      premium: false,
    },
    {
      id: 4,
      name: "Social Media Manager",
      type: "agent",
      description:
        "Automated agent for scheduling and posting content across platforms",
      rating: 4.7,
      downloads: 3210,
      creator: "Noyco Team",
      price: 39.99,
      premium: true,
    },
    {
      id: 5,
      name: "Invoice Processing",
      type: "workflow",
      description:
        "Extract data from invoices and integrate with accounting software",
      rating: 4.4,
      downloads: 1254,
      creator: "Noyco Team",
      price: 0,
      premium: false,
    },
    {
      id: 6,
      name: "Lead Generation Assistant",
      type: "chatflow",
      description:
        "Conversational AI for qualifying leads and scheduling meetings",
      rating: 4.9,
      downloads: 2105,
      creator: "Noyco Team",
      price: 59.99,
      premium: true,
    },
  ];

  const filteredItems =
    activeTab === "all"
      ? marketplaceItems
      : marketplaceItems.filter((item) => item.type === activeTab);

  const handleViewDetails = (item) => {
    if (!isAuthenticated) {
      handleLogin();
      return;
    }
    setSelectedItem(item);
    console.log("View details for:", item);
  };

  return (
    <section className="py-12">
      <div className="container px-4">
        <div className="mb-8 text-center">
          <p className="text-muted-foreground">
            Discover ready-to-use workflows, pipelines, agents, and chatflows
            created by our community and experts.
          </p>
        </div>

        <Tabs
          defaultValue="all"
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsList className="mb-6 justify-center">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="workflow">Workflows</TabsTrigger>
            <TabsTrigger value="pipeline">Pipelines</TabsTrigger>
            <TabsTrigger value="agent">Agents</TabsTrigger>
            <TabsTrigger value="chatflow">Chatflows</TabsTrigger>
          </TabsList>

          <TabsContent value={activeTab} className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

        <div className="mt-12 text-center">
          <Button size="lg">Browse All Marketplace Items</Button>
        </div>
      </div>
    </section>
  );
}
