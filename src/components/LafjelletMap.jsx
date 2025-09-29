"use client";

import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";

function GpxTrack() {
    const map = useMap();

    useEffect(() => {
        (async () => {
            const L = (await import("leaflet")).default;
            await import("leaflet-gpx");

            const gpx = new L.GPX("/trail.gpx", {
                async: true,

                marker_options: {
                    startIconUrl: null,
                    endIconUrl: null,
                    shadowUrl: null,
                },

                polyline_options: { color: "blue", weight: 4 },

                gpx_options: { parseElements: ["track"] },
            })
                .on("addpoint", (e) => {
                    if (e?.layer?.remove) e.layer.remove();
                })
                .on("loaded", (e) => {
                    map.fitBounds(e.target.getBounds());
                });

            gpx.addTo(map);
        })();
    }, [map]);

    return null;
}

export default function LafjelletMap() {
    return (
        <MapContainer
            center={[62.32699, 6.71989]}
            zoom={13}
            style={{ height: "100%", width: "100%" }}
        >
            <TileLayer
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            />
            <GpxTrack />
        </MapContainer>
    );
}
