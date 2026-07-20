"use client";

import { useEffect, useState } from "react";

// Vanderbijlpark, Gauteng coordinates. Open-Meteo is free and keyless —
// no BKGL env var needed for this.
const LATITUDE = -26.71;
const LONGITUDE = 27.84;

// WMO weather codes per Open-Meteo's current_weather field.
const WEATHER_CODES: Record<number, { label: string; icon: string }> = {
  0: { label: "clear sky", icon: "☀️" },
  1: { label: "mainly clear", icon: "🌤️" },
  2: { label: "partly cloudy", icon: "⛅" },
  3: { label: "overcast clouds", icon: "☁️" },
  45: { label: "fog", icon: "🌫️" },
  48: { label: "fog", icon: "🌫️" },
  51: { label: "light drizzle", icon: "🌦️" },
  53: { label: "drizzle", icon: "🌦️" },
  55: { label: "dense drizzle", icon: "🌧️" },
  61: { label: "light rain", icon: "🌦️" },
  63: { label: "rain", icon: "🌧️" },
  65: { label: "heavy rain", icon: "🌧️" },
  71: { label: "light snow", icon: "🌨️" },
  73: { label: "snow", icon: "🌨️" },
  75: { label: "heavy snow", icon: "❄️" },
  80: { label: "rain showers", icon: "🌦️" },
  81: { label: "rain showers", icon: "🌧️" },
  82: { label: "violent showers", icon: "⛈️" },
  95: { label: "thunderstorm", icon: "⛈️" },
};

export default function WeatherWidget() {
  const [data, setData] = useState<{ temp: number; code: number } | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${LATITUDE}&longitude=${LONGITUDE}&current_weather=true`,
    )
      .then((res) => res.json())
      .then((json) => {
        if (!cancelled && json?.current_weather) {
          setData({
            temp: Math.round(json.current_weather.temperature),
            code: json.current_weather.weathercode,
          });
        }
      })
      .catch(() => {
        // Weather is decorative — fail silently rather than show a broken widget.
      });
    return () => {
      cancelled = true;
    };
  }, []);

  if (!data) return null;

  const weather = WEATHER_CODES[data.code] ?? { label: "", icon: "🌡️" };

  return (
    <div className="flex items-center gap-2 font-utility text-soft-ivory">
      <span aria-hidden="true" className="text-2xl leading-none">
        {weather.icon}
      </span>
      <span className="leading-tight">
        <span className="block text-sm font-semibold">{data.temp}°C</span>
        {weather.label && (
          <span className="block text-xs capitalize text-soft-ivory/80">{weather.label}</span>
        )}
      </span>
    </div>
  );
}
