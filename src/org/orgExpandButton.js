import React from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const styles = {
    expandBtn: {
        width: "30px",
        height: "30px",
        margin: "auto",
        color: "#227c9d",
        backgroundColor: "#fef9ef",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "2px solid #d3d3d3",
        borderRadius: "50%",
        cursor: "pointer",
    },

};

const CustomExpandButton = (node) => {
    if (!node || !node.data) {
        return null; // Handle case when node data is undefined
    }

    const handleExpandClick = () => {
        if (node.expandCollapse) {
            node.expandCollapse();
        }
    };

    return (
        <div style={styles.expandBtn} onClick={handleExpandClick}>
            <span>{node.data._directSubordinates}</span>
            {node.children ? <ExpandMoreIcon /> : <ExpandLessIcon />}
        </div>
    );
};

export default CustomExpandButton;

