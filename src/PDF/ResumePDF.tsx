import { Document, Page, Text } from '@react-pdf/renderer';
import { ContactLinksPDF } from '~/PDF/ContactLinksPDF';
import { PDF_CONSTANTS } from '~/PDF/constants';
import { EducationPDF } from '~/PDF/EducationPDF';
import { ExperiencePDF } from '~/PDF/ExperiencePDF';
import { HeaderPDF } from '~/PDF/HeaderPDF';
import { Row } from '~/PDF/LayoutPDF';
import { SkillsPDF } from '~/PDF/SkillsPDF';
import { layout } from '~/PDF/theme';

export function ResumePDF() {
  return (
    <Document title={PDF_CONSTANTS.DOC_TITLE}>
      <Page wrap style={layout.page}>
        <Row>
          <HeaderPDF />
          <ContactLinksPDF />
        </Row>

        <Row>
          <ExperiencePDF />
          <SkillsPDF />
        </Row>

        <Row>
          <EducationPDF />
          <Text> </Text>
        </Row>
      </Page>
    </Document>
  );
}
