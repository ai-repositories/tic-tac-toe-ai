import React from 'react';
import theme from '../../../themes/theme';
import raf from 'raf';
import { drawBoardLinesWithAnimation } from './drawBoardLines';
import { drawXWithAnimation } from './drawX';
import { drawArc } from './drawArc';

class CanvasTest extends React.PureComponent {

  componentDidMount() {
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');

    const linesTheme = {
      lineColor: theme.colors.white,
      lineWidth: 3,
      percentageByFrame: 5,
      delayAfterEachLine: 10
    };

    drawBoardLinesWithAnimation(linesTheme, ctx, raf);
    drawXWithAnimation(linesTheme, ctx, raf)([0, 0]);
    drawArc(linesTheme, ctx)([100, 35, 20, 0, 1.8 * Math.PI]);
  }

  render() {
    return (
      <div>
        <canvas
          id="myCanvas"
          width="200"
          height="200"
          style={{
            backgroundColor: theme.colors.black,
            maxWidth: '100%'
          }}
        />
      </div>);
  }
}

export default CanvasTest;
