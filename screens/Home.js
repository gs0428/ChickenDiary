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
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View key="" style={{ justifyContent: "space-between", marginVertical: 20, flexDirection: "row" }}>
        <TouchableOpacity onPress={() => preMonth()}>
          <Text style={{ fontSize: 25, marginHorizontal: 20 }}>이전 달</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 25 }}>
          {year}.{month}
        </Text>
        <Button title="Go to Profile" onPress={() => navigation.navigate("Profile")} />

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
              {days[index].map((day1, index1) => {
                return (
                  <TouchableOpacity
                    style={{
                      width: width / 7,
                      height: weekLen < 6 ? height / 6.7 : height / 8.05,
                      alignItems: "center",
                      borderWidth: day1 === undefined ? 0 : 1,
                      key: day1,
                      borderColor: "tomato",
                      // margin: 0.5,
                    }}
                  >
                    <Text style={{ fontSize: 25 }}>{day1}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          );
        })}
      </View>
    </SafeAreaView>
  );
};
