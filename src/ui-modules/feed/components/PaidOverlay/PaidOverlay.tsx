import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { BlurView } from "expo-blur";
import { MoneyIcon } from "@icons";
import { Button } from "@ui-kit";
import { styles } from "./PaidOverlay.styles";
import { IS_IOS } from "@constants";

const PaidOverlay = () => {
  return (
    <React.Fragment>
      <BlurView intensity={IS_IOS ? 40 : 160} style={[StyleSheet.absoluteFillObject, styles.blurred]} >
        <View style={styles.box}>
          <View style={styles.iconBox}>
            <MoneyIcon width={20} height={20} />
          </View>
          <Text style={styles.text}>
            {"Контент скрыт пользователем.\nДоступ откроется после доната"}
          </Text>
          <Button label="Отправить донат" fullWidth={false} style={styles.button} />
        </View>
      </BlurView>
    </React.Fragment>
  );
};

export default PaidOverlay;
