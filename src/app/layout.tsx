import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { ScrollProgress } from "@/components/site/site-scroll-progress";
import { ChatbotFab } from "@/features/chatbot/chatbot-fab";
import { SiteBackground } from "@/components/site/site-background";

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: "Purva Tandel",
    template: "%s | Purva Tandel",
  },
  description:
    "Software Engineer (Backend & AI) building scalable systems, data pipelines, and reliable AI applications.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Purva Tandel",
    description:
      "Software Engineer (Backend & AI) building scalable systems, data pipelines, and reliable AI applications.",
    type: "website",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Purva Tandel",
    description:
      "Software Engineer (Backend & AI) building scalable systems, data pipelines, and reliable AI applications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased dark"
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <SiteBackground />
        <ScrollProgress />
        <SiteHeader />
        <div className="flex-1">{children}</div>
        <SiteFooter />
        <ChatbotFab />
      </body>
    </html>
  );
}
