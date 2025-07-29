import './App.css'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { Container} from '@mui/material'
import Header from './layout/Header'
import Footer from './layout/Footer'
import Body from './layout/body'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#007FFF',
      dark: '#0066CC',
    },
    background: {
      default: '#202124',
      paper: '#1E1E1E',
    },
    text: {
      primary: '#fff',
    },
  },
   components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'custom' },
          style: {
            backgroundColor: 'rgb(138,180,248)',
            color: 'rgb(32,33,36)',
            borderRadius: '12px',
            padding: '10px 20px',
            textTransform: 'none',
            '&:hover': {
              backgroundColor: 'rgba(170, 200, 250, 1)',
            },
          },
        },
      ],
    },
  },
});

function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <Container maxWidth="md"
          disableGutters
          sx={{
            minHeight:"100vh",
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch',
          }}
        >
          <Header />
          <Body />
          <Footer />
        </Container>
    </ThemeProvider>
  )
}

export default App
