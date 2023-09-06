import React, {useEffect, memo, useCallback} from 'react';

import Stack from '@mui/material/Stack';
import { MuiColorInput } from 'mui-color-input'

import {TODO_COLOR} from '../../constats/TodoConstants';
import useLocalStorage from '../../hooks/useLocalStorage'

import './style.css'

export default memo (function TodoColorPicker({liftingColor}) {
  const [color, setColor] = useLocalStorage(`color`, TODO_COLOR)

  const handleChange = (newColor) => {
    setColor(newColor)
  }

  const memoLiftingColor = useCallback(liftingColor, [liftingColor]);

  useEffect(() => {
    memoLiftingColor(color);
  }, [color, memoLiftingColor]);

  return (
    <Stack direction="row" alignItems="center">
      <h3 className='color__title'>Color: </h3>
      <MuiColorInput  value={color} onChange={handleChange} />
    </Stack>
  );
})