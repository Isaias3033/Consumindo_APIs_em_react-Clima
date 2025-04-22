import { View, Text, Image, StyleSheet, Dimensions } from "react-native"

// Define TypeScript interface for our props
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

interface WeatherCardProps {
  data: WeatherData
}

export default function WeatherCard({ data }: WeatherCardProps) {
  // Format the last updated time
  const formatLastUpdated = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  return (
    <View style={styles.cardContainer}>
      <View style={styles.card}>
        {/* Header section with location */}
        <View style={styles.locationContainer}>
          <Text style={styles.city}>{data.location.name}</Text>
          <Text style={styles.region}>
            {data.location.region}, {data.location.country}
          </Text>
        </View>

        {/* Main weather info */}
        <View style={styles.mainInfo}>
          <View style={styles.tempContainer}>
            <Text style={styles.temp}>{Math.round(data.current.temp_c)}°</Text>
            <Text style={styles.feelsLike}>Sensação térmica: {Math.round(data.current.feelslike_c)}°C</Text>
          </View>

          <View style={styles.conditionContainer}>
            <Image source={{ uri: "https:" + data.current.condition.icon }} style={styles.icon} />
            <Text style={styles.condition}>{data.current.condition.text}</Text>
          </View>
        </View>

        {/* Weather details */}
        <View style={styles.detailsContainer}>
          <View style={styles.detailRow}>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Umidade</Text>
              <Text style={styles.detailValue}>{data.current.humidity}%</Text>
            </View>

            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Vento</Text>
              <Text style={styles.detailValue}>{data.current.wind_kph} km/h</Text>
            </View>
          </View>

          <View style={styles.detailRow}>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Nuvens</Text>
              <Text style={styles.detailValue}>{data.current.cloud}%</Text>
            </View>

            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Pressão</Text>
              <Text style={styles.detailValue}>{data.current.pressure_mb} mb</Text>
            </View>
          </View>
        </View>

        {/* Last updated */}
        <Text style={styles.lastUpdated}>Atualizado às {formatLastUpdated(data.current.last_updated)}</Text>
      </View>
    </View>
  )
}

const { width } = Dimensions.get("window")

const styles = StyleSheet.create({
  cardContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  card: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: 16,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  locationContainer: {
    alignItems: "center",
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
    paddingBottom: 15,
  },
  city: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  region: {
    fontSize: 16,
    color: "#666",
    marginTop: 4,
  },
  mainInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  tempContainer: {
    flex: 1,
  },
  temp: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#0066cc",
  },
  feelsLike: {
    fontSize: 14,
    color: "#666",
  },
  conditionContainer: {
    alignItems: "center",
  },
  icon: {
    width: 80,
    height: 80,
  },
  condition: {
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    marginTop: 5,
    color: "#444",
  },
  detailsContainer: {
    backgroundColor: "#f9f9f9",
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  detailItem: {
    flex: 1,
    alignItems: "center",
  },
  detailLabel: {
    fontSize: 14,
    color: "#666",
    marginBottom: 4,
  },
  detailValue: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  lastUpdated: {
    fontSize: 12,
    color: "#999",
    textAlign: "center",
    fontStyle: "italic",
  },
})
