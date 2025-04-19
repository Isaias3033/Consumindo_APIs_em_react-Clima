import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function WeatherCard({ data }: { data: any }) {
  return (
    <View style={styles.card}>
      <Text style={styles.city}>{data.location.name}, {data.location.region}</Text>
      <Image source={{ uri: 'https:' + data.current.condition.icon }} style={styles.icon} />
      <Text style={styles.temp}>{data.current.temp_c}°C</Text>
      <Text style={styles.info}>{data.current.condition.text}</Text>

      <Text style={styles.extra}>Umidade: {data.current.humidity}%</Text>
      <Text style={styles.extra}>Vento: {data.current.wind_kph} km/h</Text>
      <Text style={styles.extra}>Sensação térmica: {data.current.feelslike_c}°C</Text>
      <Text style={styles.extra}>Nuvens: {data.current.cloud}%</Text>
      <Text style={styles.extra}>Pressão: {data.current.pressure_mb} mb</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { alignItems: 'center', marginTop: 20 },
  city: { fontSize: 22, fontWeight: 'bold' },
  temp: { fontSize: 30, fontWeight: 'bold' },
  icon: { width: 64, height: 64 },
  info: { marginTop: 5, fontSize: 16 },
  extra: { fontSize: 14, marginTop: 2 }
});
