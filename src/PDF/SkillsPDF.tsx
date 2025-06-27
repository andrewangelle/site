import { StyleSheet, Text, View } from '@react-pdf/renderer';
import { PDF_CONSTANTS } from '~/PDF/constants';
import { colors, typography } from '~/PDF/theme';

export function SkillsPDF() {
  return (
    <View>
      <Text style={typography.h3}>{PDF_CONSTANTS.HEADINGS.SKILLS}</Text>
      <View style={styles.container}>
        {PDF_CONSTANTS.SKILLS.map((skill) => (
          <Text key={skill} style={styles.skill}>
            {skill}
          </Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  },
  skill: {
    ...typography.body_2,
    color: colors.gray,
  },
});
