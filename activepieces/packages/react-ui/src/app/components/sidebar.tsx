// import { QuestionMarkCircledIcon } from '@radix-ui/react-icons';
// import { t } from 'i18next';
// import {
//   ChevronDownIcon,
//   ChevronUpIcon,
//   ExternalLink,
//   FileTextIcon,
//   LockKeyhole,
// } from 'lucide-react';
// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';

// import { useEmbedding } from '@/components/embed-provider';
// import { Button } from '@/components/ui/button';
// import {
//   Collapsible,
//   CollapsibleTrigger,
//   CollapsibleContent,
// } from '@/components/ui/collapsible';
// import { ScrollArea } from '@/components/ui/scroll-area';
// import { Separator } from '@/components/ui/separator';
// import {
//   Sidebar,
//   SidebarContent,
//   SidebarFooter,
//   SidebarGroup,
//   SidebarGroupLabel,
//   SidebarHeader,
//   SidebarMenu,
//   SidebarMenuButton,
//   SidebarMenuSubItem,
//   SidebarMenuSub,
//   SidebarMenuItem,
//   SidebarMenuAction,
// } from '@/components/ui/sidebar-shadcn';
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipTrigger,
// } from '@/components/ui/tooltip';
// import { ProjectSwitcher } from '@/features/projects/components/project-switcher';
// import { useAuthorization } from '@/hooks/authorization-hooks';
// import { flagsHooks } from '@/hooks/flags-hooks';
// import { cn, determineDefaultRoute } from '@/lib/utils';
// import { ApFlagId, ApEdition, supportUrl } from '@activepieces/shared';

// import { ShowPoweredBy } from '../../components/show-powered-by';
// import { platformHooks } from '../../hooks/platform-hooks';

// import { Header } from './header';
// import UsageLimitsButton from './usage-limits-button';

// type Link = {
//   icon: React.ReactNode;
//   label: string;
//   to: string;
//   notification?: boolean;
// };

// type CustomTooltipLinkProps = {
//   to: string;
//   label: string;
//   Icon?: React.ElementType;
//   extraClasses?: string;
//   notification?: boolean;
//   locked?: boolean;
//   newWindow?: boolean;
//   isActive?: (pathname: string) => boolean;
//   isSubItem: boolean;
// };
// const CustomTooltipLink = ({
//   to,
//   label,
//   Icon,
//   extraClasses,
//   notification,
//   locked,
//   newWindow,
//   isActive,
//   isSubItem,
// }: CustomTooltipLinkProps) => {
//   const location = useLocation();

//   const isLinkActive =
//     location.pathname.startsWith(to) || isActive?.(location.pathname);
//   return (
//     <Link
//       to={to}
//       target={newWindow ? '_blank' : ''}
//       rel={newWindow ? 'noopener noreferrer' : ''}
//     >
//       <div
//         className={`relative flex  items-center gap-1 justify-between hover:bg-accent hover:text-primary rounded-lg transition-colors ${
//           extraClasses || ''
//         }${
//           isLinkActive
//             ? '!bg-primary/10 !text-primary hover:text-[#3F3F46]'
//             : ''
//         } ${isSubItem ? 'text-[#3F3F46] ' : ''}`}
//       >
//         <div
//           className={`w-full flex items-center justify-between gap-2 p-2 ${
//             !Icon ? 'p-2' : ''
//           }`}
//         >
//           <div className="flex items-center gap-2">
//             {Icon && <Icon className={`size-4`} />}
//             <span className={`text-sm`}>{label}</span>
//           </div>
//           {locked && <LockKeyhole className="size-3" color="grey" />}
//         </div>
//         {notification && !locked && (
//           <span className="bg-destructive mr-1 size-2 rounded-full "></span>
//         )}
//       </div>
//     </Link>
//   );
// };

// export type SidebarGroup = {
//   name?: string;
//   putEmptySpaceTop?: boolean;
//   label: string;
//   icon: React.ElementType;
//   items: SidebarLink[];
//   type: 'group';
//   defaultOpen: boolean;
//   open: boolean;
//   setOpen: (open: boolean) => void;
//   isActive?: (pathname: string) => boolean;
// };

// export type SidebarLink = {
//   to: string;
//   label: string;
//   icon?: React.ElementType;
//   type: 'link';
//   notification?: boolean;
//   locked?: boolean;
//   hasPermission?: boolean;
//   showInEmbed?: boolean;
//   isSubItem: boolean;
//   isActive?: (pathname: string) => boolean;
// };

// export type SidebarItem = SidebarLink | SidebarGroup;

// type SidebarProps = {
//   children: React.ReactNode;
//   items: SidebarItem[];
//   isHomeDashboard?: boolean;
//   hideSideNav?: boolean;
//   hideHeader?: boolean;
//   removeGutters?: boolean;
// };
// export function SidebarComponent({
//   children,
//   items,
//   isHomeDashboard = false,
//   hideSideNav = false,
//   hideHeader = false,
//   removeGutters = false,
// }: SidebarProps) {
//   const branding = flagsHooks.useWebsiteBranding();
//   const { data: edition } = flagsHooks.useFlag<ApEdition>(ApFlagId.EDITION);
//   const { embedState } = useEmbedding();
//   const { platform } = platformHooks.useCurrentPlatform();
//   const defaultRoute = determineDefaultRoute(useAuthorization().checkAccess);
//   const location = useLocation();
//   return (
//     <div className="flex min-h-screen w-full">
//       <div className="flex min-h-screen w-full">
//         {!hideSideNav && (
//           <Sidebar className="w-[255px]">
//             <SidebarContent>
//               <SidebarHeader className="pt-4 pb-0">
//                 <div className="flex items-center justify-center">
//                   <Link
//                     to={isHomeDashboard ? defaultRoute : '/platform'}
//                     className="h-[48px] flex items-center justify-center"
//                   >
//                     <Tooltip>
//                       <TooltipTrigger asChild>
//                         {edition === ApEdition.COMMUNITY ||
//                         embedState.isEmbedded ? (
//                           <Button variant="ghost">
//                             <img
//                               src={branding.logos.fullLogoUrl}
//                               alt={t('home')}
//                               width={100}
//                               height={20}
//                               className="p-2 rounded-lg"
                              
//                             />
                            
//                           </Button>
//                         ) : (
//                           <img
//                             src={branding.logos.logoIconUrl}
//                             alt={t('home')}
//                             width={40}
//                             height={40}
//                             className="border-2 border-primary p-2 rounded-lg"
//                           />
//                         )}
//                       </TooltipTrigger>
//                       <TooltipContent side="bottom">{t('Home')}</TooltipContent>
//                     </Tooltip>
//                   </Link>
//                   <ProjectSwitcher />
//                 </div>
//               </SidebarHeader>
//               <SidebarContent className="gap-0">
//                 <ScrollArea className="h-[calc(100vh-100px)]">
//                   {items.map((item, index) =>
//                     item.type === 'group' ? (
//                       <SidebarGroup key={item.name} className="py-2">
//                         {item.putEmptySpaceTop && (
//                           <Separator className="mb-8" />
//                         )}
//                         {item.name && (
//                           <SidebarGroupLabel>{item.name}</SidebarGroupLabel>
//                         )}
//                         <SidebarMenu className="py-0">
//                           <Collapsible
//                             defaultOpen={
//                               item.defaultOpen ||
//                               item.isActive?.(location.pathname)
//                             }
//                             className="group/collapsible"
//                             onOpenChange={(open) => {
//                               item.setOpen(open);
//                             }}
//                           >
//                             <SidebarMenuItem>
//                               <CollapsibleTrigger asChild>
//                                 <SidebarMenuButton className="py-0 gap-2 hover:bg-accent hover:text-primary rounded-lg transition-colors">
//                                   {item.icon && (
//                                     <item.icon className="size-5" />
//                                   )}
//                                   <span>{item.label}</span>
//                                   <SidebarMenuAction>
//                                     {item.open ? (
//                                       <ChevronUpIcon />
//                                     ) : (
//                                       <ChevronDownIcon />
//                                     )}
//                                   </SidebarMenuAction>
//                                 </SidebarMenuButton>
//                               </CollapsibleTrigger>
//                               <CollapsibleContent>
//                                 <SidebarMenuSub>
//                                   {item.items.map((link, index) => (
//                                     <SidebarMenuSubItem key={link.label}>
//                                       <SidebarMenuButton asChild>
//                                         <CustomTooltipLink
//                                           to={link.to}
//                                           label={link.label}
//                                           Icon={link.icon}
//                                           key={index}
//                                           notification={link.notification}
//                                           locked={link.locked}
//                                           isActive={link.isActive}
//                                           isSubItem={link.isSubItem}
//                                         />
//                                       </SidebarMenuButton>
//                                     </SidebarMenuSubItem>
//                                   ))}
//                                 </SidebarMenuSub>
//                               </CollapsibleContent>
//                             </SidebarMenuItem>
//                           </Collapsible>
//                         </SidebarMenu>
//                       </SidebarGroup>
//                     ) : (
//                       <SidebarGroup key={item.label} className="py-1">
//                         <SidebarMenu className="gap-0 p-0">
//                           <SidebarMenuItem key={item.label}>
//                             <SidebarMenuButton asChild>
//                               <CustomTooltipLink
//                                 to={item.to}
//                                 label={item.label}
//                                 Icon={item.icon}
//                                 key={index}
//                                 notification={item.notification}
//                                 locked={item.locked}
//                                 isActive={item.isActive}
//                                 isSubItem={item.isSubItem}
//                               />
//                             </SidebarMenuButton>
//                           </SidebarMenuItem>
//                         </SidebarMenu>
//                       </SidebarGroup>
//                     ),
//                   )}
//                 </ScrollArea>
//               </SidebarContent>
//               <SidebarFooter className="pb-4 gap-4">
//                 <SidebarMenu>
//                   {true && (
//                     <>
//                       <SidebarMenuItem className="hover:bg-accent hover:text-primary rounded-lg transition-colors">
//                         <SidebarMenuButton asChild>
//                           <Link
//                             to={supportUrl}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="flex justify-between"
//                           >
//                             <div className="flex items-center gap-2">
//                               <QuestionMarkCircledIcon className="size-5" />
//                               <span>{t('Community Support')}</span>
//                             </div>
//                             <ExternalLink className="size-5" />
//                           </Link>
//                         </SidebarMenuButton>
//                       </SidebarMenuItem>
//                       <SidebarMenuItem className="hover:bg-accent hover:text-primary rounded-lg transition-colors">
//                         <SidebarMenuButton asChild>
//                           <Link
//                             to="https://activepieces.com/docs"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="flex justify-between"
//                           >
//                             <div className="flex items-center gap-2">
//                               <FileTextIcon className="size-5" />
//                               <span>{t('Docs')}</span>
//                             </div>
//                             <ExternalLink className="size-5" />
//                           </Link>
//                         </SidebarMenuButton>
//                       </SidebarMenuItem>
//                     </>
//                   )}
//                 </SidebarMenu>
//                 <Separator />
//                 <SidebarMenu>
//                   <UsageLimitsButton />
//                 </SidebarMenu>
//               </SidebarFooter>
//             </SidebarContent>
//           </Sidebar>
//         )}
//         <div
//           className={cn('flex-1 p-4', {
//             'py-0': hideHeader,
//             'px-0': removeGutters,
//           })}
//         >
//           {!hideHeader ? (
//             <div className="flex flex-col">
//               <div className={removeGutters ? 'px-4' : ''}>
//                 <Header />
//               </div>
//               <div
//                 className={cn('flex', {
//                   'py-4': embedState.isEmbedded,
//                   ' px-2': !removeGutters,
//                   'pt-10': !hideHeader,
//                 })}
//               >
//                 {children}
//               </div>
//             </div>
//           ) : (
//             children
//           )}
//         </div>
//       </div>
//       <ShowPoweredBy show={platform?.showPoweredBy && isHomeDashboard} />
//     </div>
//   );
// }








// import { QuestionMarkCircledIcon } from '@radix-ui/react-icons';
// import { t } from 'i18next';
// import {
//   ChevronDownIcon,
//   ChevronUpIcon,
//   ExternalLink,
//   FileTextIcon,
//   LockKeyhole,
// } from 'lucide-react';
// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';

// import { useEmbedding } from '@/components/embed-provider';
// import { Button } from '@/components/ui/button';
// import {
//   Collapsible,
//   CollapsibleTrigger,
//   CollapsibleContent,
// } from '@/components/ui/collapsible';
// import { ScrollArea } from '@/components/ui/scroll-area';
// import { Separator } from '@/components/ui/separator';
// import {
//   Sidebar,
//   SidebarContent,
//   SidebarFooter,
//   SidebarGroup,
//   SidebarGroupLabel,
//   SidebarHeader,
//   SidebarMenu,
//   SidebarMenuButton,
//   SidebarMenuSubItem,
//   SidebarMenuSub,
//   SidebarMenuItem,
//   SidebarMenuAction,
// } from '@/components/ui/sidebar-shadcn';
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipTrigger,
// } from '@/components/ui/tooltip';
// import { ProjectSwitcher } from '@/features/projects/components/project-switcher';
// import { useAuthorization } from '@/hooks/authorization-hooks';
// import { flagsHooks } from '@/hooks/flags-hooks';
// import { cn, determineDefaultRoute } from '@/lib/utils';
// import { ApFlagId, ApEdition, supportUrl } from '@activepieces/shared';

// import { ShowPoweredBy } from '../../components/show-powered-by';
// import { platformHooks } from '../../hooks/platform-hooks';

// import { Header } from './header';
// import UsageLimitsButton from './usage-limits-button';

// type Link = {
//   icon: React.ReactNode;
//   label: string;
//   to: string;
//   notification?: boolean;
// };

// type CustomTooltipLinkProps = {
//   to: string;
//   label: string;
//   Icon?: React.ElementType;
//   extraClasses?: string;
//   notification?: boolean;
//   locked?: boolean;
//   newWindow?: boolean;
//   isActive?: (pathname: string) => boolean;
//   isSubItem: boolean;
// };

// const CustomTooltipLink = ({
//   to,
//   label,
//   Icon,
//   extraClasses,
//   notification,
//   locked,
//   newWindow,
//   isActive,
//   isSubItem,
// }: CustomTooltipLinkProps) => {
//   const location = useLocation();

//   const isLinkActive =
//     location.pathname.startsWith(to) || isActive?.(location.pathname);
    
//   return (
//     <Link
//       to={to}
//       target={newWindow ? '_blank' : ''}
//       rel={newWindow ? 'noopener noreferrer' : ''}
//     >
//       <div
//         className={cn(
//           'relative flex items-center gap-1 justify-between',
//           'hover:bg-accent/40 hover:shadow-glyph-inner rounded-lg',
//           'transition-all duration-200 group/glyph-link',
//           'font-glyph text-sm',
//           isLinkActive
//             ? 'bg-primary/10 text-primary shadow-glyph'
//             : 'text-foreground/90',
//           isSubItem ? 'pl-6 text-muted-foreground/90' : 'px-2',
//           extraClasses
//         )}
//       >
//         <div className="w-full flex items-center justify-between gap-2 p-2">
//           <div className="flex items-center gap-2">
//             {Icon && (
//               <Icon className="size-4 text-muted-foreground/80 group-hover/glyph-link:text-primary" />
//             )}
//             <span>{label}</span>
//           </div>
//           {locked && (
//             <LockKeyhole className="size-3 text-muted-foreground/60 mr-1" />
//           )}
//         </div>
//         {notification && !locked && (
//           <span className="absolute right-2 top-2.5 bg-destructive size-2 rounded-full animate-glow"></span>
//         )}
//       </div>
//     </Link>
//   );
// };

// export type SidebarGroup = {
//   name?: string;
//   putEmptySpaceTop?: boolean;
//   label: string;
//   icon: React.ElementType;
//   items: SidebarLink[];
//   type: 'group';
//   defaultOpen: boolean;
//   open: boolean;
//   setOpen: (open: boolean) => void;
//   isActive?: (pathname: string) => boolean;
// };

// export type SidebarLink = {
//   to: string;
//   label: string;
//   icon?: React.ElementType;
//   type: 'link';
//   notification?: boolean;
//   locked?: boolean;
//   hasPermission?: boolean;
//   showInEmbed?: boolean;
//   isSubItem: boolean;
//   isActive?: (pathname: string) => boolean;
// };

// export type SidebarItem = SidebarLink | SidebarGroup;

// type SidebarProps = {
//   children: React.ReactNode;
//   items: SidebarItem[];
//   isHomeDashboard?: boolean;
//   hideSideNav?: boolean;
//   hideHeader?: boolean;
//   removeGutters?: boolean;
// };

// export function SidebarComponent({
//   children,
//   items,
//   isHomeDashboard = false,
//   hideSideNav = false,
//   hideHeader = false,
//   removeGutters = false,
// }: SidebarProps) {
//   const branding = flagsHooks.useWebsiteBranding();
//   const { data: edition } = flagsHooks.useFlag<ApEdition>(ApFlagId.EDITION);
//   const { embedState } = useEmbedding();
//   const { platform } = platformHooks.useCurrentPlatform();
//   const defaultRoute = determineDefaultRoute(useAuthorization().checkAccess);
//   const location = useLocation();

//   return (
//     <div className="flex min-h-screen w-full glyph-pattern">
//       <div className="flex min-h-screen w-full">
//         {!hideSideNav && (
//           <Sidebar className="w-[255px] border-r-0 glyph-border bg-background/95 backdrop-blur-lg">
//             <SidebarContent>
//               <SidebarHeader className="pt-4 pb-0">
//                 <div className="flex items-center justify-center gap-2">
//                   <Link
//                     to={isHomeDashboard ? defaultRoute : '/platform'}
//                     className="h-[48px] flex items-center justify-center hover:shadow-glyph-inner rounded-lg transition-all"
//                   >
//                     <Tooltip>
//                       <TooltipTrigger asChild>
//                         {edition === ApEdition.COMMUNITY ||
//                         embedState.isEmbedded ? (
//                           <Button variant="ghost" className="hover:bg-transparent">
//                             <img
//                               src={branding.logos.fullLogoUrl}
//                               alt={t('home')}
//                               width={100}
//                               height={20}
//                               className="p-2 rounded-lg hover:shadow-glyph"
//                             />
//                           </Button>
//                         ) : (
//                           <div className="border-2 border-primary/20 p-2 rounded-lg hover:shadow-glyph transition-all">
//                             <img
//                               src={branding.logos.logoIconUrl}
//                               alt={t('home')}
//                               width={40}
//                               height={40}
//                             />
//                           </div>
//                         )}
//                       </TooltipTrigger>
//                       <TooltipContent side="bottom" className="font-glyph">
//                         {t('Home')}
//                       </TooltipContent>
//                     </Tooltip>
//                   </Link>
//                   <ProjectSwitcher />
//                 </div>
//               </SidebarHeader>
//               <SidebarContent className="gap-0">
//                 <ScrollArea className="h-[calc(100vh-100px)] glyph-pattern">
//                   {items.map((item, index) =>
//                     item.type === 'group' ? (
//                       <SidebarGroup key={item.name} className="py-2">
//                         {item.putEmptySpaceTop && (
//                           <Separator className="mb-8 bg-border/30" />
//                         )}
//                         {item.name && (
//                           <SidebarGroupLabel className="font-glyph text-muted-foreground/80 px-2 text-xs uppercase tracking-wider">
//                             {item.name}
//                           </SidebarGroupLabel>
//                         )}
//                         <SidebarMenu className="py-0">
//                           <Collapsible
//                             defaultOpen={
//                               item.defaultOpen ||
//                               item.isActive?.(location.pathname)
//                             }
//                             className="group/collapsible"
//                             onOpenChange={(open) => {
//                               item.setOpen(open);
//                             }}
//                           >
//                             <SidebarMenuItem>
//                               <CollapsibleTrigger asChild>
//                                 <SidebarMenuButton className="py-0 gap-2 hover:bg-accent/40 hover:shadow-glyph-inner rounded-lg transition-all font-glyph text-foreground/90">
//                                   {item.icon && (
//                                     <item.icon className="size-5 text-muted-foreground/80 group-hover/collapsible:text-primary" />
//                                   )}
//                                   <span>{item.label}</span>
//                                   <SidebarMenuAction>
//                                     {item.open ? (
//                                       <ChevronUpIcon className="text-muted-foreground/60" />
//                                     ) : (
//                                       <ChevronDownIcon className="text-muted-foreground/60" />
//                                     )}
//                                   </SidebarMenuAction>
//                                 </SidebarMenuButton>
//                               </CollapsibleTrigger>
//                               <CollapsibleContent>
//                                 <SidebarMenuSub>
//                                   {item.items.map((link) => (
//                                     <SidebarMenuSubItem key={link.label}>
//                                       <SidebarMenuButton asChild>
//                                         <CustomTooltipLink
//                                           {...link}
//                                           isSubItem={link.isSubItem}
//                                         />
//                                       </SidebarMenuButton>
//                                     </SidebarMenuSubItem>
//                                   ))}
//                                 </SidebarMenuSub>
//                               </CollapsibleContent>
//                             </SidebarMenuItem>
//                           </Collapsible>
//                         </SidebarMenu>
//                       </SidebarGroup>
//                     ) : (
//                       <SidebarGroup key={item.label} className="py-1">
//                         <SidebarMenu className="gap-0 p-0">
//                           <SidebarMenuItem key={item.label}>
//                             <SidebarMenuButton asChild>
//                               <CustomTooltipLink
//                                 {...item}
//                                 isSubItem={item.isSubItem}
//                               />
//                             </SidebarMenuButton>
//                           </SidebarMenuItem>
//                         </SidebarMenu>
//                       </SidebarGroup>
//                     )
//                   )}
//                 </ScrollArea>
//               </SidebarContent>
//               <SidebarFooter className="pb-4 gap-4">
//                 <SidebarMenu>
//                   {true && (
//                     <>
//                       <SidebarMenuItem className="hover:bg-accent/40 hover:shadow-glyph-inner rounded-lg">
//                         <SidebarMenuButton asChild>
//                           <Link
//                             to={supportUrl}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="flex justify-between font-glyph text-sm"
//                           >
//                             <div className="flex items-center gap-2">
//                               <QuestionMarkCircledIcon className="size-5 text-muted-foreground/80" />
//                               <span>{t('Community Support')}</span>
//                             </div>
//                             <ExternalLink className="size-5 text-muted-foreground/60" />
//                           </Link>
//                         </SidebarMenuButton>
//                       </SidebarMenuItem>
//                       <SidebarMenuItem className="hover:bg-accent/40 hover:shadow-glyph-inner rounded-lg">
//                         <SidebarMenuButton asChild>
//                           <Link
//                             to="https://activepieces.com/docs"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="flex justify-between font-glyph text-sm"
//                           >
//                             <div className="flex items-center gap-2">
//                               <FileTextIcon className="size-5 text-muted-foreground/80" />
//                               <span>{t('Docs')}</span>
//                             </div>
//                             <ExternalLink className="size-5 text-muted-foreground/60" />
//                           </Link>
//                         </SidebarMenuButton>
//                       </SidebarMenuItem>
//                     </>
//                   )}
//                 </SidebarMenu>
//                 <Separator className="bg-border/30" />
//                 <SidebarMenu>
//                   <UsageLimitsButton />
//                 </SidebarMenu>
//               </SidebarFooter>
//             </SidebarContent>
//           </Sidebar>
//         )}
//         <div
//           className={cn(
//             'flex-1 p-4 bg-background/80 backdrop-blur-sm',
//             {
//               'py-0': hideHeader,
//               'px-0': removeGutters,
//             }
//           )}
//         >
//           {!hideHeader ? (
//             <div className="flex flex-col">
//               <div className={removeGutters ? 'px-4' : ''}>
//                 <Header />
//               </div>
//               <div
//                 className={cn('flex', {
//                   'py-4': embedState.isEmbedded,
//                   ' px-2': !removeGutters,
//                   'pt-10': !hideHeader,
//                 })}
//               >
//                 {children}
//               </div>
//             </div>
//           ) : (
//             children
//           )}
//         </div>
//       </div>
//       <ShowPoweredBy show={platform?.showPoweredBy && isHomeDashboard} />
//     </div>
//   );
// }









// import { QuestionMarkCircledIcon } from '@radix-ui/react-icons';
// import { t } from 'i18next';
// import {
//   ChevronDownIcon,
//   ChevronUpIcon,
//   ExternalLink,
//   FileTextIcon,
//   LockKeyhole,
// } from 'lucide-react';
// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';

// import { useEmbedding } from '@/components/embed-provider';
// import { Button } from '@/components/ui/button';
// import {
//   Collapsible,
//   CollapsibleTrigger,
//   CollapsibleContent,
// } from '@/components/ui/collapsible';
// import { ScrollArea } from '@/components/ui/scroll-area';
// import { Separator } from '@/components/ui/separator';
// import {
//   Sidebar,
//   SidebarContent,
//   SidebarFooter,
//   SidebarGroup,
//   SidebarGroupLabel,
//   SidebarHeader,
//   SidebarMenu,
//   SidebarMenuButton,
//   SidebarMenuSubItem,
//   SidebarMenuSub,
//   SidebarMenuItem,
//   SidebarMenuAction,
// } from '@/components/ui/sidebar-shadcn';
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipTrigger,
// } from '@/components/ui/tooltip';
// import { ProjectSwitcher } from '@/features/projects/components/project-switcher';
// import { useAuthorization } from '@/hooks/authorization-hooks';
// import { flagsHooks } from '@/hooks/flags-hooks';
// import { cn, determineDefaultRoute } from '@/lib/utils';
// import { ApFlagId, ApEdition, supportUrl } from '@activepieces/shared';

// import { ShowPoweredBy } from '../../components/show-powered-by';
// import { platformHooks } from '../../hooks/platform-hooks';

// import { Header } from './header';
// import UsageLimitsButton from './usage-limits-button';

// export type SidebarLink = {
//   to: string;
//   label: string;
//   icon?: React.ElementType;
//   type: 'link';
//   notification?: boolean;
//   locked?: boolean;
//   hasPermission?: boolean;
//   showInEmbed?: boolean;
//   isSubItem: boolean;
//   isActive?: (pathname: string) => boolean;
// };

// export type SidebarGroup = {
//   name?: string;
//   putEmptySpaceTop?: boolean;
//   label: string;
//   icon: React.ElementType;
//   items: SidebarLink[];
//   type: 'group';
//   defaultOpen: boolean;
//   open: boolean;
//   setOpen: (open: boolean) => void;
//   isActive?: (pathname: string) => boolean;
// };

// export type SidebarItem = SidebarLink | SidebarGroup;

// type SidebarProps = {
//   children: React.ReactNode;
//   items: SidebarItem[];
//   isHomeDashboard?: boolean;
//   hideSideNav?: boolean;
//   hideHeader?: boolean;
//   removeGutters?: boolean;
// };

// type CustomTooltipLinkProps = {
//   to: string;
//   label: string;
//   Icon?: React.ElementType;
//   extraClasses?: string;
//   notification?: boolean;
//   locked?: boolean;
//   newWindow?: boolean;
//   isActive?: (pathname: string) => boolean;
//   isSubItem: boolean;
// };

// const CustomTooltipLink = ({
//   to,
//   label,
//   Icon,
//   extraClasses,
//   notification,
//   locked,
//   newWindow,
//   isActive,
//   isSubItem,
// }: CustomTooltipLinkProps) => {
//   const location = useLocation();
//   const isLinkActive =
//     location.pathname.startsWith(to) || isActive?.(location.pathname);

//   return (
//     <Link
//       to={to}
//       target={newWindow ? '_blank' : ''}
//       rel={newWindow ? 'noopener noreferrer' : ''}
//     >
//       <div
//         className={cn(
//           'relative flex items-center gap-1 justify-between p-2',
//           'hover:bg-accent/40 hover:shadow-glyph-inner rounded-lg',
//           'transition-all duration-200 group/glyph-link',
//           'font-glyph text-sm',
//           isLinkActive
//             ? 'bg-primary/10 text-primary shadow-glyph'
//             : 'text-foreground/90',
//           isSubItem ? 'pl-6 text-muted-foreground/90' : 'px-2',
//           extraClasses
//         )}
//       >
//         <div className="w-full flex items-center justify-between gap-2">
//           <div className="flex items-center gap-2">
//             {Icon && (
//               <Icon className="size-4 text-muted-foreground/80 group-hover/glyph-link:text-primary" />
//             )}
//             <span>{label}</span>
//           </div>
//           {locked && (
//             <LockKeyhole className="size-3 text-muted-foreground/60 mr-1" />
//           )}
//         </div>
//         {notification && !locked && (
//           <span className="absolute right-2 top-2.5 bg-destructive size-2 rounded-full animate-glow"></span>
//         )}
//       </div>
//     </Link>
//   );
// };

// // Disallowed labels from previous requirements.
// const DISALLOWED_LABELS = ['Team', 'Todo', 'Todos', 'Table', 'Tables', 'Environments'];

// function filterSidebarItem(item: SidebarItem): boolean {
//   if (item.type === 'link') {
//     return !DISALLOWED_LABELS.includes(item.label);
//   }
//   if (item.type === 'group') {
//     item.items = item.items.filter((link) => !DISALLOWED_LABELS.includes(link.label));
//     return item.items.length > 0;
//   }
//   return true;
// }

// export function SidebarComponent({
//   children,
//   items,
//   isHomeDashboard = false,
//   hideSideNav = false,
//   hideHeader = false,
//   removeGutters = false,
// }: SidebarProps) {
//   const branding = flagsHooks.useWebsiteBranding();
//   const { data: edition } = flagsHooks.useFlag<ApEdition>(ApFlagId.EDITION);
//   const { embedState } = useEmbedding();
//   const { platform } = platformHooks.useCurrentPlatform();
//   const defaultRoute = determineDefaultRoute(useAuthorization().checkAccess);
//   const location = useLocation();

//   // Extract specific sub-items from Automation and Settings groups.
//   // These items will be promoted as top-level links.
//   const extractedItems: SidebarItem[] = [];
//   const remainingItems: SidebarItem[] = [];

//   items.forEach((item) => {
//     if (item.type === 'group') {
//       if (item.label === 'Automation') {
//         const allowed = ['Flows', 'Issues', 'Runs', 'Connections'];
//         const extracted = item.items.filter((sub) => allowed.includes(sub.label));
//         extractedItems.push(...extracted);
//       } else if (item.label === 'Settings') {
//         const allowed = ['General', 'Appearance', 'Pieces'];
//         const extracted = item.items.filter((sub) => allowed.includes(sub.label));
//         extractedItems.push(...extracted);
//       } else {
//         remainingItems.push(item);
//       }
//     } else {
//       remainingItems.push(item);
//     }
//   });

//   // Combine extracted items and the remaining items.
//   // The extracted items are promoted to the top level.
//   const combinedItems = [...extractedItems, ...remainingItems];

//   // Finally, apply the disallowed filter.
//   const finalItems = combinedItems.filter(filterSidebarItem);

//   return (
//     <div className="flex min-h-screen w-full glyph-pattern">
//       <div className="flex min-h-screen w-full">
//         {!hideSideNav && (
//           <Sidebar className="w-[255px] border-r-0 glyph-border bg-background/95 backdrop-blur-lg">
//             <SidebarContent>
//               <SidebarHeader className="pt-4 pb-0">
//                 <div className="flex items-center justify-center gap-2">
//                   <Link
//                     to={isHomeDashboard ? defaultRoute : '/platform'}
//                     className="h-[48px] flex items-center justify-center hover:shadow-glyph-inner rounded-lg transition-all"
//                   >
//                     <Tooltip>
//                       <TooltipTrigger asChild>
//                         {edition === ApEdition.COMMUNITY ||
//                         embedState.isEmbedded ? (
//                           <Button variant="ghost" className="hover:bg-transparent">
//                             {/* <img
//                               src={branding.logos.fullLogoUrl}
//                               alt={t('home')}
//                               width={100}
//                               height={20}
//                               className="p-2 rounded-lg hover:shadow-glyph"
//                             /> */}
//                               <h1 className="text-4xl font-italic text-gray-900 tracking-tight"> Noyco </h1>
//                           </Button>
//                         ) : (
//                           <div className="border-2 border-primary/20 p-2 rounded-lg hover:shadow-glyph transition-all">
//                             <img
//                               src={branding.logos.logoIconUrl}
//                               alt={t('home')}
//                               width={40}
//                               height={40}
//                             />
//                           </div>
//                         )}
//                       </TooltipTrigger>
//                       <TooltipContent side="bottom" className="font-glyph">
//                         {t('Home')}
//                       </TooltipContent>
//                     </Tooltip>
//                   </Link>
//                   <ProjectSwitcher />
//                 </div>
//               </SidebarHeader>
//               <SidebarContent className="gap-0">
//                 <ScrollArea className="h-[calc(100vh-100px)] glyph-pattern">
//                   {finalItems.map((item) =>
//                     item.type === 'group' ? (
//                       <SidebarGroup key={item.name} className="py-2 mb-4">
//                         {item.putEmptySpaceTop && (
//                           <Separator className="mb-8 bg-border/30" />
//                         )}
//                         {item.name && (
//                           <SidebarGroupLabel className="font-glyph text-muted-foreground/80 px-2 text-xs uppercase tracking-wider mb-2">
//                             {item.name}
//                           </SidebarGroupLabel>
//                         )}
//                         <SidebarMenu className="py-0">
//                           <Collapsible
//                             defaultOpen={
//                               item.defaultOpen ||
//                               item.isActive?.(location.pathname)
//                             }
//                             className="group/collapsible"
//                             onOpenChange={(open) => {
//                               item.setOpen(open);
//                             }}
//                           >
//                             <SidebarMenuItem>
//                               <CollapsibleTrigger asChild>
//                                 <SidebarMenuButton className="py-0 gap-2 hover:bg-accent/40 hover:shadow-glyph-inner rounded-lg transition-all font-glyph text-foreground/90">
//                                   {item.icon && (
//                                     <item.icon className="size-5 text-muted-foreground/80 group-hover/collapsible:text-primary" />
//                                   )}
//                                   <span>{item.label}</span>
//                                   <SidebarMenuAction>
//                                     {item.open ? (
//                                       <ChevronUpIcon className="text-muted-foreground/60" />
//                                     ) : (
//                                       <ChevronDownIcon className="text-muted-foreground/60" />
//                                     )}
//                                   </SidebarMenuAction>
//                                 </SidebarMenuButton>
//                               </CollapsibleTrigger>
//                               <CollapsibleContent>
//                                 <SidebarMenuSub>
//                                   {item.items.map((link) => (
//                                     <SidebarMenuSubItem key={link.label} className="mb-2">
//                                       <SidebarMenuButton asChild>
//                                         <CustomTooltipLink
//                                           {...link}
//                                           isSubItem={link.isSubItem}
//                                         />
//                                       </SidebarMenuButton>
//                                     </SidebarMenuSubItem>
//                                   ))}
//                                 </SidebarMenuSub>
//                               </CollapsibleContent>
//                             </SidebarMenuItem>
//                           </Collapsible>
//                         </SidebarMenu>
//                       </SidebarGroup>
//                     ) : (
//                       <SidebarGroup key={item.label} className="py-1 mb-4">
//                         <SidebarMenu className="gap-0 p-0">
//                           <SidebarMenuItem key={item.label}>
//                             <SidebarMenuButton asChild>
//                               <CustomTooltipLink
//                                 {...item}
//                                 isSubItem={item.isSubItem}
//                               />
//                             </SidebarMenuButton>
//                           </SidebarMenuItem>
//                         </SidebarMenu>
//                       </SidebarGroup>
//                     )
//                   )}
//                 </ScrollArea>
//               </SidebarContent>
//               <SidebarFooter className="pb-4 gap-4">
//                 <SidebarMenu>
//                   {/* Removed Community Support and Docs items */}
//                 </SidebarMenu>
//                 <Separator className="bg-border/30" />
//                 <SidebarMenu>
//                   <UsageLimitsButton />
//                 </SidebarMenu>
//               </SidebarFooter>
//             </SidebarContent>
//           </Sidebar>
//         )}
//         <div
//           className={cn(
//             'flex-1 p-4 bg-background/80 backdrop-blur-sm',
//             {
//               'py-0': hideHeader,
//               'px-0': removeGutters,
//             }
//           )}
//         >
//           {!hideHeader ? (
//             <div className="flex flex-col">
//               <div className={removeGutters ? 'px-4' : ''}>
//                 <Header />
//               </div>
//               <div
//                 className={cn('flex', {
//                   'py-4': embedState.isEmbedded,
//                   'px-2': !removeGutters,
//                   'pt-10': !hideHeader,
//                 })}
//               >
//                 {children}
//               </div>
//             </div>
//           ) : (
//             children
//           )}
//         </div>
//       </div>
//       <ShowPoweredBy show={platform?.showPoweredBy && isHomeDashboard} />
//     </div>
//   );
// }








import { QuestionMarkCircledIcon } from '@radix-ui/react-icons';
import { t } from 'i18next';
import {
  ChevronDownIcon,
  ChevronUpIcon,
  ExternalLink,
  FileTextIcon,
  LockKeyhole,
} from 'lucide-react';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { useEmbedding } from '@/components/embed-provider';
import { Button } from '@/components/ui/button';
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from '@/components/ui/collapsible';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup as SidebarGroupComponent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuSubItem,
  SidebarMenuSub,
  SidebarMenuItem,
  SidebarMenuAction,
} from '@/components/ui/sidebar-shadcn';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { ProjectSwitcher } from '@/features/projects/components/project-switcher';
import { useAuthorization } from '@/hooks/authorization-hooks';
import { flagsHooks } from '@/hooks/flags-hooks';
import { cn, determineDefaultRoute } from '@/lib/utils';
import { ApFlagId, ApEdition, supportUrl } from '@activepieces/shared';

import { ShowPoweredBy } from '../../components/show-powered-by';
import { platformHooks } from '../../hooks/platform-hooks';

import { Header } from './header';
import UsageLimitsButton from './usage-limits-button';

export type SidebarLink = {
  to: string;
  label: string;
  icon?: React.ElementType;
  type: 'link';
  notification?: boolean;
  locked?: boolean;
  hasPermission?: boolean;
  showInEmbed?: boolean;
  isSubItem: boolean;
  isActive?: (pathname: string) => boolean;
};

export type SidebarGroup = {
  name?: string;
  putEmptySpaceTop?: boolean;
  label: string;
  icon: React.ElementType;
  items: SidebarLink[];
  type: 'group';
  defaultOpen: boolean;
  open: boolean;
  setOpen: (open: boolean) => void;
  isActive?: (pathname: string) => boolean;
};

export type SidebarItem = SidebarLink | SidebarGroup;

type SidebarProps = {
  children: React.ReactNode;
  items: SidebarItem[];
  isHomeDashboard?: boolean;
  hideSideNav?: boolean;
  hideHeader?: boolean;
  removeGutters?: boolean;
};

type CustomTooltipLinkProps = {
  to: string;
  label: string;
  Icon?: React.ElementType;
  extraClasses?: string;
  notification?: boolean;
  locked?: boolean;
  newWindow?: boolean;
  isActive?: (pathname: string) => boolean;
  isSubItem: boolean;
};

const CustomTooltipLink = ({
  to,
  label,
  Icon,
  extraClasses,
  notification,
  locked,
  newWindow,
  isActive,
  isSubItem,
}: CustomTooltipLinkProps) => {
  const location = useLocation();
  const isLinkActive =
    location.pathname.startsWith(to) || isActive?.(location.pathname);

  return (
    <Link
      to={to}
      target={newWindow ? '_blank' : ''}
      rel={newWindow ? 'noopener noreferrer' : ''}
      className="focus:outline-none"
    >
      <div
        className={cn(
          'relative flex items-center gap-1 justify-between p-2 rounded-lg transition-all duration-200',
          // On hover, apply a grey background (for light and dark modes)
          'hover:bg-gray-200 dark:hover:bg-gray-700',
          // Ensure text remains grey in all states
          'font-glyph text-sm text-gray-700 dark:text-gray-300',
          isSubItem ? 'pl-6' : 'px-2',
          extraClasses
        )}
      >
        <div className="w-full flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            {Icon && (
              <Icon className="size-4 text-gray-600 dark:text-gray-400" />
            )}
            <span>{label}</span>
          </div>
          {locked && (
            <LockKeyhole className="size-3 text-gray-600 dark:text-gray-400 mr-1" />
          )}
        </div>
        {notification && !locked && (
          <span className="absolute right-2 top-2.5 bg-destructive size-2 rounded-full"></span>
        )}
      </div>
    </Link>
  );
};

// Disallowed labels from previous requirements.
const DISALLOWED_LABELS = ['Team', 'Todo', 'Todos', 'Table', 'Tables', 'Environments'];

function filterSidebarItem(item: SidebarItem): boolean {
  if (item.type === 'link') {
    return !DISALLOWED_LABELS.includes(item.label);
  }
  if (item.type === 'group') {
    item.items = item.items.filter((link) => !DISALLOWED_LABELS.includes(link.label));
    return item.items.length > 0;
  }
  return true;
}

export function SidebarComponent({
  children,
  items,
  isHomeDashboard = false,
  hideSideNav = false,
  hideHeader = false,
  removeGutters = false,
}: SidebarProps) {
  const branding = flagsHooks.useWebsiteBranding();
  const { data: edition } = flagsHooks.useFlag<ApEdition>(ApFlagId.EDITION);
  const { embedState } = useEmbedding();
  const { platform } = platformHooks.useCurrentPlatform();
  const defaultRoute = determineDefaultRoute(useAuthorization().checkAccess);
  const location = useLocation();

  // Extract specific sub-items from Automation and Settings groups.
  // These items will be promoted as top-level links.
  const extractedItems: SidebarItem[] = [];
  const remainingItems: SidebarItem[] = [];

  items.forEach((item) => {
    if (item.type === 'group') {
      if (item.label === 'Automation') {
        const allowed = ['Flows', 'Issues', 'Runs', 'Connections'];
        const extracted = item.items.filter((sub) => allowed.includes(sub.label));
        extractedItems.push(...extracted);
      } else if (item.label === 'Settings') {
        const allowed = ['General', 'Appearance', 'Pieces'];
        const extracted = item.items.filter((sub) => allowed.includes(sub.label));
        extractedItems.push(...extracted);
      } else {
        remainingItems.push(item);
      }
    } else {
      remainingItems.push(item);
    }
  });

  // Combine extracted items and the remaining items.
  // The extracted items are promoted to the top level.
  const combinedItems = [...extractedItems, ...remainingItems];

  // Finally, apply the disallowed filter.
  const finalItems = combinedItems.filter(filterSidebarItem);

  return (
    // Added a dark mode override to make the glyph pattern more visible in dark mode
    <div className="flex min-h-screen w-full glyph-pattern dark:bg-[radial-gradient(circle_at_1px_1px,hsla(var(--foreground),0.2)_1px,transparent_0)]">
      <div className="flex min-h-screen w-full">
        {!hideSideNav && (
          // Removed "glyph-border" from sidebar to remove the magenta glow effect
          <Sidebar className="w-[255px] border-r-0 bg-background/95 backdrop-blur-lg">
            <SidebarContent>
              <SidebarHeader className="pt-4 pb-0">
                <div className="flex items-center justify-center gap-2">
                  <Link
                    to={isHomeDashboard ? defaultRoute : '/platform'}
                    className="h-[48px] flex items-center justify-center hover:shadow-none rounded-lg transition-all"
                  >
                    <Tooltip>
                      <TooltipTrigger asChild>
                        {edition === ApEdition.COMMUNITY || embedState.isEmbedded ? (
                          <Button variant="ghost" className="hover:bg-transparent">
                            {/* Updated "Noyco" header to have white text in dark mode */}
                            <h1 className="text-4xl font-italic text-gray-900 dark:text-white tracking-tight">
                              Noyco
                            </h1>
                          </Button>
                        ) : (
                          <div className="border-2 border-primary/20 p-2 rounded-lg hover:shadow-none transition-all">
                            <img
                              src={branding.logos.logoIconUrl}
                              alt={t('home')}
                              width={40}
                              height={40}
                            />
                          </div>
                        )}
                      </TooltipTrigger>
                      <TooltipContent side="bottom" className="font-glyph">
                        {t('Home')}
                      </TooltipContent>
                    </Tooltip>
                  </Link>
                  <ProjectSwitcher />
                </div>
              </SidebarHeader>
              <SidebarContent className="gap-0">
                <ScrollArea className="h-[calc(100vh-100px)] glyph-pattern">
                  {finalItems.map((item) =>
                    item.type === 'group' ? (
                      <SidebarGroupComponent key={item.name} className="py-2 mb-4">
                        {item.putEmptySpaceTop && (
                          <Separator className="mb-8 bg-border/30" />
                        )}
                        {item.name && (
                          <SidebarGroupLabel className="font-glyph text-muted-foreground/80 px-2 text-xs uppercase tracking-wider mb-2">
                            {item.name}
                          </SidebarGroupLabel>
                        )}
                        <SidebarMenu className="py-0">
                          <Collapsible
                            defaultOpen={
                              item.defaultOpen ||
                              item.isActive?.(location.pathname)
                            }
                            className="group/collapsible"
                            onOpenChange={(open) => {
                              item.setOpen(open);
                            }}
                          >
                            <SidebarMenuItem>
                              <CollapsibleTrigger asChild>
                                <SidebarMenuButton className="py-0 gap-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-all font-glyph text-foreground/90">
                                  {item.icon && (
                                    <item.icon className="size-5 text-gray-600 dark:text-gray-400" />
                                  )}
                                  <span>{item.label}</span>
                                  <SidebarMenuAction>
                                    {item.open ? (
                                      <ChevronUpIcon className="text-gray-600 dark:text-gray-400" />
                                    ) : (
                                      <ChevronDownIcon className="text-gray-600 dark:text-gray-400" />
                                    )}
                                  </SidebarMenuAction>
                                </SidebarMenuButton>
                              </CollapsibleTrigger>
                              <CollapsibleContent>
                                <SidebarMenuSub>
                                  {item.items.map((link) => (
                                    <SidebarMenuSubItem key={link.label} className="mb-2">
                                      <SidebarMenuButton asChild>
                                        <CustomTooltipLink
                                          {...link}
                                          isSubItem={link.isSubItem}
                                        />
                                      </SidebarMenuButton>
                                    </SidebarMenuSubItem>
                                  ))}
                                </SidebarMenuSub>
                              </CollapsibleContent>
                            </SidebarMenuItem>
                          </Collapsible>
                        </SidebarMenu>
                      </SidebarGroupComponent>
                    ) : (
                      <SidebarGroupComponent key={item.label} className="py-1 mb-4">
                        <SidebarMenu className="gap-0 p-0">
                          <SidebarMenuItem key={item.label}>
                            <SidebarMenuButton asChild>
                              <CustomTooltipLink
                                {...item}
                                isSubItem={item.isSubItem}
                              />
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                        </SidebarMenu>
                      </SidebarGroupComponent>
                    )
                  )}
                </ScrollArea>
              </SidebarContent>
              <SidebarFooter className="pb-4 gap-4">
                <SidebarMenu>
                  {/* Removed Community Support and Docs items */}
                </SidebarMenu>
                <Separator className="bg-border/30" />
                <SidebarMenu>
                  <UsageLimitsButton />
                </SidebarMenu>
              </SidebarFooter>
            </SidebarContent>
          </Sidebar>
        )}
        <div
          className={cn(
            'flex-1 p-4 bg-background/80 backdrop-blur-sm',
            {
              'py-0': hideHeader,
              'px-0': removeGutters,
            }
          )}
        >
          {!hideHeader ? (
            <div className="flex flex-col">
              <div className={removeGutters ? 'px-4' : ''}>
                <Header />
              </div>
              <div
                className={cn('flex', {
                  'py-4': embedState.isEmbedded,
                  'px-2': !removeGutters,
                  'pt-10': !hideHeader,
                })}
              >
                {children}
              </div>
            </div>
          ) : (
            children
          )}
        </div>
      </div>
      <ShowPoweredBy show={platform?.showPoweredBy && isHomeDashboard} />
    </div>
  );
}
