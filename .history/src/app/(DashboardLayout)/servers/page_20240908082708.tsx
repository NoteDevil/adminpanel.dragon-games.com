"use client";
import { CardContent, Typography } from "@mui/material";
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import DashboardCard from "@/app/(DashboardLayout)/components/shared/DashboardCard";
import BlankCard from "../components/shared/BlankCard";

const SamplePage = () => {
  return (
    <PageContainer title="Sample Page" description="this is Sample page">
      <DashboardCard title="Sample Page">
        <BlankCard>
          <CardContent>
            <Typography variant="h1">h1. Heading</Typography>
            <Typography variant="body1" color="textSecondary">
              font size: 30 | line-height: 45 | font weight: 500
            </Typography>
          </CardContent>
        </BlankCard>
      </DashboardCard>
    </PageContainer>
  );
};

export default SamplePage;
