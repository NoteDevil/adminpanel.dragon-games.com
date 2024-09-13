"use client";
import { Button, CardContent, Grid } from "@mui/material";
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import DashboardCard from "@/app/(DashboardLayout)/components/shared/DashboardCard";
import BlankCard from "../components/shared/BlankCard";
import { IconPlus } from "@tabler/icons-react";

const SamplePage = () => {
  return (
    <PageContainer title="Sample Page" description="this is Sample page">
      <Grid container spacing={3}>
        <Grid item sm={12}>
          <DashboardCard title="Default Text">
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
          </DashboardCard>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default SamplePage;
