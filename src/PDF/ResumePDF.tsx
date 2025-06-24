import { Document, Page } from '@react-pdf/renderer';
import { ContactLinksPDF } from '~/PDF/ContactLinksPDF';
import { EducationPDF } from '~/PDF/EducationPDF';
import { ExperiencePDF } from '~/PDF/ExperiencePDF';
import { HeaderPDF } from '~/PDF/HeaderPDF';
import { ColumnMain, ColumnSide, Row } from '~/PDF/LayoutPDF';
import { SkillsPDF } from '~/PDF/SkillsPDF';
import { PDF_CONSTANTS } from '~/PDF/constants';
import { layout } from '~/PDF/theme';

export function ResumePDF() {
  return (
    <Document title={PDF_CONSTANTS.DOC_TITLE}>
      <Page wrap style={layout.page}>
        <Row>
          <ColumnMain>
            <HeaderPDF />
          </ColumnMain>

          <ColumnSide>
            <ContactLinksPDF />
          </ColumnSide>
        </Row>

        <Row>
          <ColumnMain>
            <ExperiencePDF />
          </ColumnMain>

          <ColumnSide>
            <SkillsPDF />
          </ColumnSide>
        </Row>

        <Row>
          <ColumnMain>
            <EducationPDF />
          </ColumnMain>
        </Row>
      </Page>
    </Document>
  );
}
