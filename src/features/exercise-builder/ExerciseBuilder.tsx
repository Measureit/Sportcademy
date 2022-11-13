import { useState } from "react";

import { Container, Grid, Paper } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectCount } from "./exerciseBuilderSlice";
import { ToolBar } from "./toolbar/ToolBar";

export function ExerciseBuilder() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <>
      <ToolBar />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          {/* Chart */}
          <Grid item xs={12} md={8} lg={9}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: 240,
              }}
            >
              {/* <Chart /> */}
            </Paper>
          </Grid>
          {/* Recent Deposits */}
          <Grid item xs={12} md={4} lg={3}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: 240,
              }}
            >
              {/* <Deposits /> */}
            </Paper>
          </Grid>
          {/* Recent Orders */}
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
              {/* <Orders /> */}
            </Paper>
          </Grid>
        </Grid>
        {/* <Copyright sx={{ pt: 4 }} /> */}
      </Container>
    </>
    // <div>
    //   Exercise builder
    //   <div className={styles.row}>
    //     <button
    //       className={styles.button}
    //       aria-label="Decrement value"
    //       onClick={() => dispatch(decrement())}
    //     >
    //       -
    //     </button>
    //     <span className={styles.value}>{count}</span>
    //     <button
    //       className={styles.button}
    //       aria-label="Increment value"
    //       onClick={() => dispatch(increment())}
    //     >
    //       +
    //     </button>
    //   </div>
    //   <div className={styles.row}>
    //     <input
    //       className={styles.textbox}
    //       aria-label="Set increment amount"
    //       value={incrementAmount}
    //       onChange={(e) => setIncrementAmount(e.target.value)}
    //     />
    //     <button
    //       className={styles.button}
    //       onClick={() => dispatch(incrementByAmount(incrementValue))}
    //     >
    //       Add Amount
    //     </button>
    //     <button
    //       className={styles.asyncButton}
    //       onClick={() => dispatch(incrementAsync(incrementValue))}
    //     >
    //       Add Async
    //     </button>
    //     <button
    //       className={styles.button}
    //       onClick={() => dispatch(incrementIfOdd(incrementValue))}
    //     >
    //       Add If Odd
    //     </button>
    //   </div>
    // </div>
  );
}
