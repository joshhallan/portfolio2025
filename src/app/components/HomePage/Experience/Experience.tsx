import { Cell, Grid, Section, Card, Typography, Badge } from "fj-elements";
import SectionTitle from "../../Global/SectionTitle/SectionTitle";
import { EXPERIENCE_DATA } from "@/data/experience";
import styles from "./Experience.module.css";
import ViewAllLink from "../../Global/ViewAllLink/ViewAllLink";

const MAX_JOBS_TO_SHOW = 4;
const summaryData = EXPERIENCE_DATA.slice(0, MAX_JOBS_TO_SHOW);

export default function Experience() {
  return (
    <Section id="experience" size="lg">
      <Grid gap="lg">
        <Cell small={12}>
          <SectionTitle color="white">Career</SectionTitle>
        </Cell>

        {summaryData.map((job, index) => {
          const variant = index % 2 === 0 ? "cyan" : "pink";

          return (
            <Cell key={job.id} small={12} medium={6} large={3}>
              <Card variant={variant}>
                <Card.Header>
                  <Typography as="h3" className={styles.jobTitle}>
                    {job.title}
                  </Typography>
                </Card.Header>

                <Card.Body>
                  <Typography as="p">{job.duration}</Typography>
                  <Typography as="p">{job.company}</Typography>
                </Card.Body>

                <Card.Footer>
                  <div className={styles.techPills}>
                    {job.technologies.slice(0, 3).map((tech, i) => (
                      <Badge
                        key={i}
                        variant={variant === "cyan" ? "primary" : "secondary"}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </Card.Footer>
              </Card>
            </Cell>
          );
        })}

        <Cell small={12}>
          <ViewAllLink href="/career">View All Roles</ViewAllLink>
        </Cell>
      </Grid>
    </Section>
  );
}
