import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import PoliticaIcon from '@mui/icons-material/Work';
import InternacionalesIcon from '@mui/icons-material/Public';
import TecnoIcon from '@mui/icons-material/Devices';
import EspectaculosIcon from '@mui/icons-material/Theaters';
import DeportesIcon from '@mui/icons-material/Sports';
import DisenoIcon from '@mui/icons-material/DesignServices';
import GamingIcon from '@mui/icons-material/SportsEsports';

export default function TemporaryDrawer({ isOpen, toggleDrawer }) {

    const secciones = [
        { label: "Política", url: "politica", icon: <PoliticaIcon style={{fill:'blueviolet'}}/> },
        { label: "Internacionales", url: "internacionales", icon: <InternacionalesIcon style={{fill:'blueviolet'}}/> },
        { label: "Tecnología", url: "tecnologia", icon: <TecnoIcon style={{fill:'blueviolet'}}/> },
        { label: "Escpectáculos", url: "espectaculos", icon: <EspectaculosIcon style={{fill:'blueviolet'}}/> },
        { label: "Deportes", url: "deportes", icon: <DeportesIcon style={{fill:'blueviolet'}}/> },
        { label: "Diseño", url: "diseno", icon: <DisenoIcon style={{fill:'blueviolet'}}/> },
        { label: "Gaming", url: "gaming", icon: <GamingIcon style={{fill:'blueviolet'}}/> }
    ]

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer}
            onKeyDown={toggleDrawer}
        >
            <List>
                {secciones.map(({ label, url, icon }) =>
                    <Link to={`/category/${url}`}>
                        <ListItem button>
                            <ListItemIcon >
                                {icon}
                            </ListItemIcon>
                            <ListItemText primary={label} />
                        </ListItem>
                    </Link>
                )}
            </List>
        </Box>
    );

    return (
        <div>

            <Drawer
                anchor={'left'}
                open={isOpen}
                onClose={toggleDrawer}
            >
                {list('left')}
            </Drawer>

        </div>
    );
}