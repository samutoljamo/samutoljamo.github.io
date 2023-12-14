import { Link, SxProps } from "@mui/material"
import React from "react";

interface IProps {
    name: string;
    link: string;
    Icon: React.ElementType;
    style?: SxProps | null;
}

const Social = ({link, Icon, style}: IProps) => (
    <Link href={link} target="_blank"><Icon sx={style} size={20} /></Link>
)

export default Social;
