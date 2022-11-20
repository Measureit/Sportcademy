import { Box, Container, Grid, Paper } from '@mui/material'
import Split from 'react-split'
import { CodeEditor } from './code-editor/CodeEditor'
import './ExerciseBuilder.css'
import { ToolBar } from './toolbar/ToolBar'
import { Visualizer } from './visualizer/Visualizer'
export function ExerciseBuilder() {
  return (
    // <Split
    //   className="flex"
    //   sizes={[20, 60, 20]}
    //   direction="horizontal"
    //   style={{ height: `calc(100vh - 4rem)` }}
    // >
    //   <div className="bg-gray-300">1</div>
    //   <div className="bg-gray-300">
    //     <ToolBar />
    //   </div>
    //   <div className="bg-gray-300">3</div>
    // </Split>
    <Split direction="vertical" style={{ height: `calc(100vh - 4rem)` }}>
      <Split className="superflex" >
      <div className="bluecolor" />
      <div className="redcolor" />
      <div className="bluecolor" />
      </Split>
      <div className="redcolor" />
    </Split>
  )
  return (
    <Box
      component="main"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
        flexGrow: 1,
        height: '90vh',
        overflow: 'auto',
      }}
    >
      <ToolBar />
      <Container maxWidth={false} sx={{ mt: 2, mb: 2 }}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: '43vh' }}>
              <Visualizer />
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: '35vh' }}>
              <CodeEditor />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
