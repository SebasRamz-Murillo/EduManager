import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardActions, Typography, Button, 
    ThemeProvider, createTheme, styled, Collapse, List, ListItem, 
    ListItemText, Divider, CircularProgress } from '@mui/material';
import { ExpandMore as ExpandMoreIcon, ExpandLess as ExpandLessIcon,
    Calculate as CalculateIcon, Book as BookIcon } from '@mui/icons-material';

const defaultTheme = createTheme();

const StyledCard = styled(Card)(({ theme }) => ({
  margin: '20px auto',
  padding: theme.spacing(2),
  maxWidth: '100%',
  overflowX: 'auto',
}));

// Define interfaces for our data structures
interface Theme {
  title: string;
  description: string;
}

interface Unit {
  unitNumber: number;
  name: string;
  description: string;
  themes: Theme[];
}

interface Subject {
  id: string;
  name: string;
  description: string;
  units: Unit[];
}

// Simulated data (replace this with your actual data or API call)
const simulatedSubjectsData: Subject[] = [
  {
    "id": "sub_001",
    "name": "Mathematics",
    "description": "A subject that covers topics in algebra, calculus, and geometry.",
    "units": [
      {
        "unitNumber": 1,
        "name": "Algebra",
        "description": "This unit covers basic algebraic concepts, including variables, equations, and functions.",
        "themes": [
          {
            "title": "Linear Equations",
            "description": "Understanding and solving linear equations and inequalities."
          },
          {
            "title": "Quadratic Equations",
            "description": "Study of quadratic equations, their properties, and solutions."
          }
        ]
      },
      {
        "unitNumber": 2,
        "name": "Calculus",
        "description": "This unit introduces the fundamental concepts of differential and integral calculus.",
        "themes": [
          {
            "title": "Limits and Continuity",
            "description": "Basic introduction to limits, continuity, and their applications."
          },
          {
            "title": "Derivatives",
            "description": "Comprehensive study of derivatives and their applications in real-world problems."
          }
        ]
      }
    ]
  },
  {
    "id": "sub_002",
    "name": "Physics",
    "description": "A subject that explores the fundamental principles of the universe, including mechanics and electromagnetism.",
    "units": [
      {
        "unitNumber": 1,
        "name": "Mechanics",
        "description": "This unit focuses on the motion of objects and the forces that affect them.",
        "themes": [
          {
            "title": "Newton's Laws of Motion",
            "description": "Study of Newton's three laws of motion and their applications."
          },
          {
            "title": "Work and Energy",
            "description": "Understanding the relationship between work, energy, and power."
          }
        ]
      },
      {
        "unitNumber": 2,
        "name": "Electromagnetism",
        "description": "This unit covers electric and magnetic fields and their interactions.",
        "themes": [
          {
            "title": "Electric Fields",
            "description": "Introduction to electric fields, Coulomb's law, and electric potential."
          },
          {
            "title": "Magnetic Fields",
            "description": "Exploration of magnetic fields and their effects on current-carrying conductors."
          }
        ]
      }
    ]
  }
];

interface SubjectCardProps {
  subject: Subject;
  onExpand: (id: string) => void;
  expanded: boolean;
}

const SubjectCard: React.FC<SubjectCardProps> = ({ subject, onExpand, expanded }) => {
  const Icon = subject.name === "Mathematics" ? CalculateIcon : BookIcon;

  return (
    <Card sx={{ minWidth: 275, m: 1, flexGrow: 1, flexBasis: '30%' }}>
      <CardContent>
        <Typography variant="h6" component="div" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Icon /> {subject.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {subject.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button 
          size="small" 
          fullWidth 
          onClick={() => onExpand(subject.id)}
          endIcon={expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        >
          {expanded ? "Ocultar detalles" : "Ver detalles"}
        </Button>
      </CardActions>
    </Card>
  );
};

interface UnitsListProps {
  units: Unit[];
}

const UnitsList: React.FC<UnitsListProps> = ({ units }) => (
  <List>
    {units.map((unit) => (
      <React.Fragment key={unit.unitNumber}>
        <ListItem alignItems="flex-start">
          <ListItemText
            primary={`Unidad ${unit.unitNumber}: ${unit.name}`}
            secondary={
              <>
                <Typography component="span" variant="body2" color="text.primary">
                  {unit.description}
                </Typography>
                {unit.themes.map((theme, index) => (
                  <Typography key={index} component="p" variant="body2">
                    • {theme.title}: {theme.description}
                  </Typography>
                ))}
              </>
            }
          />
        </ListItem>
        <Divider component="li" />
      </React.Fragment>
    ))}
  </List>
);

const SubjectCards: React.FC = () => {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [expandedSubject, setExpandedSubject] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulating an API call
    const fetchSubjects = async () => {
      setLoading(true);
      try {
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        setSubjects(simulatedSubjectsData);
      } catch (error) {
        console.error("Error fetching subjects:", error);
        // Handle error (e.g., show error message to user)
      } finally {
        setLoading(false);
      }
    };

    fetchSubjects();
  }, []);

  const handleExpand = (subjectId: string) => {
    setExpandedSubject(expandedSubject === subjectId ? null : subjectId);
  };

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </div>
    );
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <StyledCard>
        <Typography variant="h4" gutterBottom>
          Materias
        </Typography>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginBottom: '20px' }}>
          {subjects.map((subject) => (
            <React.Fragment key={subject.id}>
              <SubjectCard 
                subject={subject} 
                onExpand={handleExpand}
                expanded={expandedSubject === subject.id}
              />
              <Collapse in={expandedSubject === subject.id} timeout="auto" unmountOnExit style={{ width: '100%' }}>
                <UnitsList units={subject.units} />
              </Collapse>
            </React.Fragment>
          ))}
        </div>
      </StyledCard>
    </ThemeProvider>
  );
};

export default SubjectCards;