import {
  Text,
  FlatList,
  Pressable,
  Image,
  View,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import ProjectPet from "../Components/ProjectPet";
import { COLORS } from "../constants/Colors";
import { Projects } from "../interface";
import { useFonts, Nunito_900Black } from "@expo-google-fonts/nunito";

export default function ProjectsScreen({
  navigation,
  projects,
  updateCurrentProject,
}: {
  updateCurrentProject: any;
  navigation?: any;
  projects: Projects | null;
}) {
  let [fontsLoaded] = useFonts({
    Nunito_900Black,
  });

  if (!fontsLoaded) {
    return <></>;
  }

  const renderPet = ({
    item,
  }: {
    item: { projectName: string; petImage: string; id: number };
  }) => (
    <ProjectPet
      navigation={navigation}
      item={item}
      key={item.id}
      name={item.projectName}
      updateCurrentProject={updateCurrentProject}
    />
  );

  return (
    <SafeAreaView style={styles.view}>
      <Text style={styles.h1}>Your Pets</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={projects}
        renderItem={renderPet}
        ListFooterComponent={() => (
          <Pressable style={styles.view} onPress={() => console.log("CLICK")}>
            <Image
              style={{ ...styles.main }}
              source={require("../assets/Icons-Buttons/AddProjectBtn.png")}
            />
          </Pressable>
        )}
      />
      <View style={{ height: "12%" }}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    height: 200,
    width: 200,
    flex: 1,
    flexDirection: "column",
    backgroundColor: COLORS.accent,
    borderRadius: 30,
    marginTop: 25,
  },
  view: {
    backgroundColor: COLORS.white,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  h1: {
    fontFamily: "Nunito_900Black",
    alignSelf: "center",
    color: COLORS.primary,
    fontSize: 40,
    marginBottom: 10,
  },
});
