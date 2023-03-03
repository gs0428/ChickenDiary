import React, { useEffect, useRef, useState } from "react";
import { SafeAreaView, Image, View, Text, Button, Animated, Dimensions, TouchableOpacity } from "react-native";
import CalendarPicker from "react-native-calendar-picker";
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addMonths,
  subMonths,
  isSameMonth,
  isSameDay,
  addDays,
  startOfDay,
  endOfDay,
  getWeek,
  getWeekOfMonth,
  getWeeksInMonth,
  addWeeks,
} from "date-fns";

export default Home = ({ navigation, route }) => {
  const [today, setToday] = useState(new Date());
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth() + 1);
  const weeks = ["일", "월", "화", "수", "목", "금", "토"];
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;
  const days = [];
  let w = 0;
  const weekLen = getWeeksInMonth(today);
  for (let i = 0; i < weekLen; i++) days.push([]);

  for (let i = 1; i <= endOfMonth(today).getDate(); i++) {
    let d = addWeeks(endOfWeek(today), w).getDate();
    if (i === d) {
      days[w].push(i);
      w++;
    } else days[w].push(i);
  }
  let firstWeek = days[0].length;
  if (firstWeek !== 7) {
    for (let i = 0; i < days[0].length; i++) {
      days[0][6 - i] = days[0][firstWeek - 1 - i];
      days[0][firstWeek - 1 - i] = undefined;
    }
  }
  const preMonth = () => {
    let pre = subMonths(today, 1);
    setToday(startOfMonth(pre));
    setMonth(pre.getMonth() + 1);
    setYear(pre.getFullYear());
  };

  const nextMonth = () => {
    let next = addMonths(today, 1);
    setToday(startOfMonth(next));
    setMonth(next.getMonth() + 1);
    setYear(next.getFullYear());
  };

  const whenToday = (e) => {
    console.log(e);
    console.log("gd");
  };
  return (
    <SafeAreaView>
      <View style={{ justifyContent: "space-between", marginVertical: 20, flexDirection: "row" }}>
        <TouchableOpacity onPress={() => preMonth()}>
          <Text style={{ fontSize: 25, marginHorizontal: 20 }}>이전 달</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 25 }}>
          {year}.{month}
        </Text>
        <TouchableOpacity onPress={() => nextMonth()}>
          <Text style={{ fontSize: 25, marginHorizontal: 20 }}>다음 달</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row", backgroundColor: "tomato" }}>
        {weeks.map((week, index) => {
          return (
            <View style={{ width: width / 7, alignItems: "center", borderWidth: 1 }} key={index}>
              <Text style={{ fontSize: 25 }}>{week}</Text>
            </View>
          );
        })}
      </View>
      <View>
        {days.map((day, index) => {
          return (
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                onPress={() => whenToday(days[index][0])}
                style={{ width: width / 7, height: weekLen < 6 ? height / 8 : height / 9.6, alignItems: "center", borderWidth: 1, key: days[index][0] }}
              >
                <Text style={{ fontSize: 25 }}>{days[index][0]}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ width: width / 7, height: weekLen < 6 ? height / 8 : height / 9.6, alignItems: "center", borderWidth: 1, key: days[index][1] }}
              >
                <Text style={{ fontSize: 25 }}>{days[index][1]}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ width: width / 7, height: weekLen < 6 ? height / 8 : height / 9.6, alignItems: "center", borderWidth: 1, key: days[index][2] }}
              >
                <Text style={{ fontSize: 25 }}>{days[index][2]}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ width: width / 7, height: weekLen < 6 ? height / 8 : height / 9.6, alignItems: "center", borderWidth: 1, key: days[index][3] }}
              >
                <Text style={{ fontSize: 25 }}>{days[index][3]}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ width: width / 7, height: weekLen < 6 ? height / 8 : height / 9.6, alignItems: "center", borderWidth: 1, key: days[index][4] }}
              >
                <Text style={{ fontSize: 25 }}>{days[index][4]}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ width: width / 7, height: weekLen < 6 ? height / 8 : height / 9.6, alignItems: "center", borderWidth: 1, key: days[index][5] }}
              >
                <Text style={{ fontSize: 25 }}>{days[index][5]}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ width: width / 7, height: weekLen < 6 ? height / 8 : height / 9.6, alignItems: "center", borderWidth: 1, key: days[index][6] }}
              >
                <Text style={{ fontSize: 25 }}>{days[index][6]}</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
      {/* <Button title="Go to Profile" onPress={() => navigation.navigate("Profile")} /> */}
    </SafeAreaView>
  );
};

// React Native Calendar Picker using react-native-calendar-picker
// https://aboutreact.com/react-native-calendar-picker/

// import React in our code
// import React, { useState } from "react";
// import { SafeAreaView, StyleSheet, View, Text, Dimensions } from "react-native";
// import CalendarPicker from "react-native-calendar-picker";

// export default Home = () => {
//   const [month, setMonth] = useState("2023");
//   const width = Dimensions.get("window").width;

//   const onDateChange = (e) => {
//     console.log(e);
//   };

//   const onMonthChange = (e) => {
//     let word = String(e);
//     let yearLoc = word.indexOf("20");
//     setMonth(word.substring(yearLoc, yearLoc + 4));
//   };

//   return (
//     <SafeAreaView>
//       <View>
//         <Text style={styles.titleStyle}>{month}년 치킨 일기</Text>
//         <CalendarPicker
//           minDate={new Date(2013, 1, 1)}
//           maxDate={new Date(2033, 12, 3)}
//           weekdays={["일", "월", "화", "수", "목", "금", "토"]}
//           months={["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"]}
//           todayBackgroundColor="grey"
//           previousTitle="이전 달"
//           nextTitle="다음 달"
//           scaleFactor={width}
//           monthTitleStyle={{ color: "black" }}
//           yearTitleStyle={{ display: "none" }}
//           selectedDayColor="#66ff33"
//           selectedDayTextColor="#000000"
//           textStyle={{
//             fontFamily: "Cochin",
//             color: "#000000",
//           }}
//           onMonthChange={onMonthChange}
//           onDateChange={onDateChange}
//         />
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#ffffff",
//   },
//   titleStyle: {
//     textAlign: "center",
//     fontSize: 20,
//     margin: 20,
//   },
// });
