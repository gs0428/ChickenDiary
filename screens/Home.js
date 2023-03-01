// import React, { useEffect, useRef } from "react";
// import { SafeAreaView, Image, View, Text, Button, Animated, Dimensions } from "react-native";
// import CalendarPicker from "react-native-calendar-picker";

// export default Home = ({ navigation, route }) => {
//     console.log(new Date().getDate());

//   return (
//       <SafeAreaView>

//       <Text>This is Home</Text>
//       <Button title="Go to Profile" onPress={() => navigation.navigate("Profile")} />
//     </SafeAreaView>
//   );
// };

// React Native Calendar Picker using react-native-calendar-picker
// https://aboutreact.com/react-native-calendar-picker/

// import React in our code
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View, Text, Dimensions } from "react-native";
import CalendarPicker from "react-native-calendar-picker";

export default Home = () => {
  const [month, setMonth] = useState("2023");
  const width = Dimensions.get("window").width;

  const onDateChange = (e) => {
    console.log(e);
  };

  const onMonthChange = (e) => {
    let word = String(e);
    let yearLoc = word.indexOf("20");
    setMonth(word.substring(yearLoc, yearLoc + 4));
  };

  return (
    <SafeAreaView>
      <View>
        <Text style={styles.titleStyle}>{month}년 치킨 일기</Text>
        <CalendarPicker
          minDate={new Date(2013, 1, 1)}
          maxDate={new Date(2033, 12, 3)}
          weekdays={["일", "월", "화", "수", "목", "금", "토"]}
          months={["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"]}
          todayBackgroundColor="grey"
          previousTitle="이전 달"
          nextTitle="다음 달"
          scaleFactor={width}
          monthTitleStyle={{ color: "black" }}
          yearTitleStyle={{ display: "none" }}
          selectedDayColor="#66ff33"
          selectedDayTextColor="#000000"
          textStyle={{
            fontFamily: "Cochin",
            color: "#000000",
          }}
          onMonthChange={onMonthChange}
          onDateChange={onDateChange}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  titleStyle: {
    textAlign: "center",
    fontSize: 20,
    margin: 20,
  },
});
