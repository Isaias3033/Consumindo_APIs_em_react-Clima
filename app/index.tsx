import React, { useState } from 'react';
import { View, Text, TextInput, Button, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';
import WeatherCard from './components/WeatherCard';

export default function HomeScreen() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const API_KEY = '6b3e14bb5eb94558aca221414251804';

  const fetchWeather = async () => {
    const cidade = city.trim();
    if (!cidade) return;
    setLoading(true);
    setError('');
    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${cidade}&aqi=yes`
      );
      setWeather(response.data);
    } catch (err: any) {
      console.log(err.response?.data || err.message);
      setError('Erro ao buscar clima.');
    }
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Previsão do Tempo</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite a cidade"
        value={city}
        onChangeText={setCity}
      />
      <Button title="Buscar" onPress={fetchWeather} />

      {loading && <ActivityIndicator size="large" />}
      {error !== '' && <Text style={styles.error}>{error}</Text>}
      {weather && <WeatherCard data={weather} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 24, textAlign: 'center', marginBottom: 20 },
  input: { borderWidth: 1, padding: 10, marginBottom: 10 },
  error: { color: 'red', textAlign: 'center', marginTop: 10 }
});
