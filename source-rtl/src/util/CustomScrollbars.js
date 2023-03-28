import React from "react";
import { Scrollbars } from "react-custom-scrollbars";

const CustomScrollbars = (props) =>
    <Scrollbars
        {...props}
        autoHide
        autoHideTimeout={1000}
        // autoHide
        data-class="scroll"
        renderTrackHorizontal={props => <div {...props}
            style={{ display: 'none' }}
            className="track-horizontal" />}  />;

export default CustomScrollbars;
