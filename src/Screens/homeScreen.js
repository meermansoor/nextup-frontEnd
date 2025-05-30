import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

export default function HomeScreen() {
  const [selectedProject, setSelectedProject] = useState("Life");
  const projectData = {
    Life: [
      { id: "1", name: "Workout Routine", goal: "Exercise daily at 7 AM" },
      { id: "2", name: "Read Books", goal: "Finish 1 book every 2 weeks" },
    ],
    Career: [
      {
        id: "3",
        name: "Build Portfolio",
        goal: "Launch portfolio website by July",
      },
      {
        id: "4",
        name: "Learn React Native",
        goal: "Complete a mobile app project",
      },
    ],
    Completed: [
      {
        id: "5",
        name: "Meditation Habit",
        goal: "Meditated for 30 days straight",
      },
      {
        id: "6",
        name: "Resume Updated",
        goal: "Updated and sent to 10 companies",
      },
    ],
  };

  return (
    <><View style={styles.container}>
      {/* Top Menu */}
      <View style={styles.menuContainer}>
        <TouchableOpacity>
          <Icon name="menu" size={28} color="black" />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            source={require("../images/splogo.jpg")}
            style={styles.profileIcon} />
        </TouchableOpacity>
      </View>

      {/* Greeting */}
      <View style={styles.headerContainer}>
        <Text style={[styles.headerText, { fontSize: 20 }]}>Good Morning,</Text>
        <Text style={styles.headerText}>Username</Text>
      </View>

      {/* Red Card */}
      <View style={styles.projectCountContainer}>
        <View style={styles.circleWrapper}>
          <View style={styles.whiteDot} />
          <View style={styles.circle}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={styles.percentText}>0/</Text>
              <Text
                style={{ fontSize: 10, color: "white", fontWeight: "bold" }}
              >
                10
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.projectTextContainer}>
          <Text style={styles.projectCountText}>Life Projects</Text>
          <Text style={styles.dateText}>27 May, 2025 | Tuesday</Text>
        </View>
      </View>

      {/* Project Type Buttons */}
      <View style={styles.projectTypes}>
        {["Life", "Career", "Completed"].map((type) => (
          <TouchableOpacity
            key={type}
            style={[
              styles.projectTypeButton,
              selectedProject === type && styles.selectedButton,
            ]}
            onPress={() => setSelectedProject(type)}
          >
            <Text
              style={[
                styles.projectTypeText,
                selectedProject === type && styles.selectedText,
              ]}
            >
              {type} Projects
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View>
        <FlatList
          data={projectData[selectedProject]}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.projectCard}>
              <Text style={styles.projectName}>{item.name}</Text>
              <Text style={styles.projectGoal}>{item.goal}</Text>
            </View>
          )}
          contentContainerStyle={{ paddingBottom: 50 }} />
           </View>
   
      </View></>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  menuContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  profileIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    paddingTop: 10,
  },
  headerContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "left",
  },
  projectCountContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingVertical: 20,
    paddingHorizontal: 15,
    width: "89%",
    backgroundColor: "#c2272d",
    borderRadius: 10,
    marginTop: 20,
    alignSelf: "center",
  },

  projectCountText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  dateText: {
    fontSize: 11,
    color: "white",
    textAlign: "center",
  },

  circleWrapper: {
    alignItems: "center",
    marginLeft: 20,
    marginRight: 10,
  },
  whiteDot: {
    position: "absolute",
    top: -6,
    width: 15,
    height: 15,
    backgroundColor: "white",
    borderRadius: 10,
    zIndex: 1,
  },
  circle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: "white",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#c2272d",
  },
  percentText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  projectTextContainer: {
    justifyContent: "center",
  },

  projectTypes: {
    marginTop: 20,
    width: "99%",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  projectTypeButton: {
    width: "32%",
    height: 30,
    backgroundColor: "white",
    borderRadius: 14,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  projectTypeText: {
    fontSize: 9,
    fontWeight: "bold",
    textAlign: "center",
  },
  selectedButton: {
    backgroundColor: "#c2272d",
    borderColor: "#c2272d",
  },
  selectedText: {
    color: "white",
  },

  projectCard: {
    backgroundColor: "#f4f4f4",
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 15,
    borderRadius: 20,
    elevation: 4,
  },
  projectName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  projectGoal: {
    fontSize: 13,
    color: "#666",
    marginTop: 5,
  },
  bottomContainer: {

    backgroundColor: "black",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginBottom: 50,
  },
});
