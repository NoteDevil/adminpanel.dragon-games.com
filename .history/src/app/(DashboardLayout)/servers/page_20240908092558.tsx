"use client";
import { Avatar, CardContent } from "@mui/material";
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import DashboardCard from "@/app/(DashboardLayout)/components/shared/DashboardCard";
import BlankCard from "../components/shared/BlankCard";
import { IconPlus } from "@tabler/icons-react";

const SamplePage = () => {
  return (
    <PageContainer title="Sample Page" description="this is Sample page">
      <DashboardCard>
        <BlankCard>
          <CardContent>
            <Avatar>
              <IconPlus />
            </Avatar>
          </CardContent>
        </BlankCard>
      </DashboardCard>
    </PageContainer>
  );
};

export default SamplePage;
