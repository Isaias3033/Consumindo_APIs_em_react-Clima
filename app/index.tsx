"use client"

import { useState } from "react"
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
} from "react-native"
import axios from "axios"
import WeatherCard from "./components/WeatherCard"
import { StatusBar } from "expo-status-bar"

// Define TypeScript interfaces for our data
interface WeatherData {
  location: {
    name: string
    region: string
    country: string
  }
  current: {
    temp_c: number
    feelslike_c: number
    condition: {
      text: string
      icon: string
    }
    humidity: number
    wind_kph: number
    cloud: number
    pressure_mb: number
    last_updated: string
  }
}

export default function HomeScreen() {
  const [city, setCity] = useState("")
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [recentSearches, setRecentSearches] = useState<string[]>([])

  const API_KEY = "6b3e14bb5eb94558aca221414251804"

  // Function to fetch weather data
  const fetchWeather = async (cityName: string) => {
    const cidade = cityName.trim()
    if (!cidade) {
      Alert.alert("Atenção", "Por favor, digite o nome de uma cidade")
      return
    }

    setLoading(true)
    setError("")

    try {
      const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${cidade}&aqi=yes`)

      setWeather(response.data)

      // Add to recent searches if not already there
      if (!recentSearches.includes(cidade)) {
        setRecentSearches((prev) => [cidade, ...prev].slice(0, 5))
      }
    } catch (err: any) {
      console.log(err.response?.data || err.message)
      if (err.response?.data?.error?.message) {
        setError(err.response.data.error.message)
      } else {
        setError("Erro ao buscar informações do clima. Verifique o nome da cidade e tente novamente.")
      }
      setWeather(null)
    } finally {
      setLoading(false)
    }
  }

  // Handle search button press
  const handleSearch = () => {
    fetchWeather(city)
  }

  // Handle recent search selection
  const handleRecentSearch = (recentCity: string) => {
    setCity(recentCity)
    fetchWeather(recentCity)
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.keyboardAvoidingView}>
        <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
          <View style={styles.header}>
            <Text style={styles.title}>Previsão do Tempo</Text>
            <Text style={styles.subtitle}>Descubra o clima em qualquer cidade</Text>
          </View>

          <View style={styles.searchContainer}>
            <TextInput
              style={styles.input}
              placeholder="Digite a cidade"
              value={city}
              onChangeText={setCity}
              placeholderTextColor="#888"
              onSubmitEditing={handleSearch}
            />
            <TouchableOpacity style={styles.button} onPress={handleSearch} activeOpacity={0.8}>
              <Text style={styles.buttonText}>Buscar</Text>
            </TouchableOpacity>
          </View>

          {/* Recent searches */}
          {recentSearches.length > 0 && (
            <View style={styles.recentSearches}>
              <Text style={styles.recentTitle}>Buscas recentes:</Text>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.recentScrollContainer}
              >
                {recentSearches.map((item, index) => (
                  <TouchableOpacity key={index} style={styles.recentItem} onPress={() => handleRecentSearch(item)}>
                    <Text style={styles.recentItemText}>{item}</Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          )}

          {/* Loading indicator */}
          {loading && (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color="#0066cc" />
              <Text style={styles.loadingText}>Buscando dados do clima...</Text>
            </View>
          )}

          {/* Error message */}
          {error !== "" && (
            <View style={styles.errorContainer}>
              <Text style={styles.error}>{error}</Text>
            </View>
          )}

          {/* Weather card */}
          {weather && <WeatherCard data={weather} />}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
  },
  header: {
    marginBottom: 24,
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginTop: 8,
  },
  searchContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    backgroundColor: "white",
    fontSize: 16,
  },
  button: {
    marginLeft: 10,
    backgroundColor: "#0066cc",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  loadingContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  loadingText: {
    marginTop: 10,
    color: "#666",
    fontSize: 16,
  },
  errorContainer: {
    backgroundColor: "#ffebee",
    padding: 15,
    borderRadius: 8,
    marginVertical: 15,
    borderWidth: 1,
    borderColor: "#ffcdd2",
  },
  error: {
    color: "#d32f2f",
    textAlign: "center",
    fontSize: 16,
  },
  recentSearches: {
    marginBottom: 20,
  },
  recentTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
    color: "#555",
  },
  recentScrollContainer: {
    paddingBottom: 5,
  },
  recentItem: {
    backgroundColor: "#e0e0e0",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
  },
  recentItemText: {
    color: "#333",
  },
})
