import { Card, CardContent, Typography, CardActions, Link, Button } from "@mui/material"

interface IProps {
    name: string;
    description: string;
    source: string | undefined;
    demo: string | undefined;
}

const ProjectCard = ({name, description, source, demo}: IProps) => (
    <Card variant='outlined' sx={{
        height: "100%",
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between'
    }}>
      <CardContent>
        <Typography variant='h6'>
          {name}
        </Typography>
        <Typography>
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{
      }}>
        <Link target='_blank' href={source}><Button disabled={!source}>Source</Button></Link>
        <Link target='_blank' href={demo}><Button disabled={!demo}>Demo</Button></Link>
      </CardActions>
    </Card>
)

export default ProjectCard;
