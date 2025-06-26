import { StyleSheet, Text, View } from '@react-pdf/renderer';
import { PDF_CONSTANTS } from '~/PDF/constants';
import { colors, typography } from '~/PDF/theme';

export function ExperiencePDF() {
  return (
    <View>
      <Text style={typography.h3}>{PDF_CONSTANTS.HEADINGS.EXPERIENCE}</Text>

      {PDF_CONSTANTS.JOBS.map((job) => (
        <View key={job.name}>
          <View style={styles.job_title}>
            <Text style={styles.weight_700}>{`${job.name}, `}</Text>
            <Text>{` ${job.location} `}</Text>
            <Text>{' — '}</Text>
            <Text style={styles.bitter_italic}>{job.title}</Text>
          </View>

          <Text style={styles.job_date}>{job.date}</Text>

          <View style={styles.job_description_container}>
            {job.description.map((text) => (
              <Text key={text} style={styles.job_description}>
                {text}
              </Text>
            ))}
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  job_title: {
    ...typography.body_1,
    display: 'flex',
    flexDirection: 'row',
  },
  job_date: {
    ...typography.body_3,
    marginTop: 8,
    marginBottom: 8,
  },
  job_description_container: {
    ...typography.body_2,
    color: colors.gray,
    marginTop: 8,
    marginBottom: 12,
  },
  job_description: {
    marginBottom: 8,
    lineHeight: 1,
  },
  line_height_1: { lineHeight: 1 },
  weight_700: { fontWeight: 700 },
  bitter_italic: { fontFamily: 'BitterItalic' },
});
