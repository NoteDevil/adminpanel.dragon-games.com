"use client";
import { CardContent, Icon, Typography } from "@mui/material";
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import DashboardCard from "@/app/(DashboardLayout)/components/shared/DashboardCard";
import BlankCard from "../components/shared/BlankCard";
import IconPlus from "@tabler/icons-react";

const SamplePage = () => {
  return (
    <PageContainer title="Sample Page" description="this is Sample page">
      <DashboardCard>
        <BlankCard>
          <CardContent>
            <Icon>IconPlus</Icon>
          </CardContent>
        </BlankCard>
      </DashboardCard>
    </PageContainer>
  );
};

export default SamplePage;
