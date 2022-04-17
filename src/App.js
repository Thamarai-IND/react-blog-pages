import './App.css'
import {
  Box,
  Button,
  Stack,
  styled,
  Typography,
} from '@mui/material'
import { Add, Settings } from '@mui/icons-material'
import Feed from './components/Feed'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Rightbar from './components/Rightbar'
function App() {
  return (
    <Box>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-evenly" marginBottom={2}>
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  )
}

export default App

// const BlueButton = styled(Button)({
//   backgroundColor: 'skyblue', color: '#888', margin: 5,
//         "&:hover":{
//           backgroundColor:"tomato"
//         },
//         "&:disabled":{
//           backgroundColor:"sandybrown",
//           color:"ivory"
//         }
// })

// (
//   <div>
//       <Button variant="text">Text</Button>
//       <Button startIcon={<Settings />} color="secondary" variant="contained">
//         Contained
//       </Button>
//       <Button startIcon={<Add />} color="success" variant="contained">
//         Contained
//       </Button>
//       <Button variant="outlined">Outlined</Button>
//       <Typography variant="h1" component="p">
//         It uses h1 style with inside p tag
//       </Typography>
//       <Button
//         variant="contained"
//         //disabled
//         sx={{ backgroundColor: 'skyblue', color: '#888', margin: 5,
//           "&:hover":{
//             color:"otherColor",
//             backgroundColor:"otherColor.light"
//           },
//           "&:disabled":{
//             backgroundColor:"sandybrown",
//             color:"ivory"
//           }
//         }}
//       >
//         My Unique Button
//       </Button>
//       <BlueButton>My Button</BlueButton>
//     </div>
// )
