"use client";
import { Button, CardContent } from "@mui/material";
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import DashboardCard from "@/app/(DashboardLayout)/components/shared/DashboardCard";
import BlankCard from "../components/shared/BlankCard";
import { IconPlus } from "@tabler/icons-react";

const SamplePage = () => {
  return (
    <PageContainer title="Sample Page" description="this is Sample page">
      <BlankCard>
        <Button sx={{ width: "100%" }}>
          <IconPlus />
        </Button>
      </BlankCard>
      <BlankCard>
        <Button sx={{ width: "100%" }}>
          <IconPlus />
        </Button>
      </BlankCard>
    </PageContainer>
  );
};

export default SamplePage;
