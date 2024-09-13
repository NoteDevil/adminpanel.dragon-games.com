"use client";
import {
  Avatar,
  Button,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import BlankCard from "../components/shared/BlankCard";
import {
  IconPlus,
  IconServer,
  IconCpu,
  IconCpu2,
  IconHttpConnect,
} from "@tabler/icons-react";

const SamplePage = () => {
  return (
    <PageContainer title="Sample Page" description="this is Sample page">
      <Grid container spacing={3}>
        <Grid item sm={12}>
          <BlankCard>
            <Button fullWidth sx={{ justifyContent: "space-around" }}>
              <Container sx={{ display: "flex", gap: 2 }}>
                <Avatar>
                  <IconServer />
                </Avatar>
                <Grid>
                  <Typography variant="h4" fontWeight={600}>
                    Minecraft
                  </Typography>
                  <Typography variant="subtitle2" fontWeight={300}>
                    Minecraft
                  </Typography>
                </Grid>
              </Container>
              <Container sx={{ display: "flex", gap: 2 }}>
                <IconHttpConnect />
                <Typography variant="caption" fontWeight={300}>
                  192.94.0.0
                </Typography>
              </Container>
              <Container>
                <IconCpu2 />
              </Container>
              <Container>
                <IconCpu />
              </Container>
            </Button>
          </BlankCard>
        </Grid>
        <Grid item sm={12}>
          <BlankCard>
            <Button sx={{ width: "100%" }}>
              <IconPlus />
            </Button>
          </BlankCard>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default SamplePage;
