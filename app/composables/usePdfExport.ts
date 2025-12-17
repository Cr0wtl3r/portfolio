import jsPDF from 'jspdf'
import { useContent } from './useContent'

export const usePdfExport = () => {
    const { content, currentLang } = useContent()

    const generatePdf = () => {
        const doc = new jsPDF()
        const data = content.value

        // Settings
        const margin = 20
        let y = 20
        const pageWidth = doc.internal.pageSize.getWidth()
        const contentWidth = pageWidth - (margin * 2)

        // Helper for text wrapping
        const addWrappedText = (text: string, fontSize: number, fontStyle: string = 'normal', color: string = '#000000') => {
            doc.setFontSize(fontSize)
            doc.setFont('helvetica', fontStyle)
            doc.setTextColor(color)

            const lines = doc.splitTextToSize(text, contentWidth)
            doc.text(lines, margin, y)
            y += (lines.length * fontSize * 0.4) + 2 // approximate line height spacing
        }

        const addSectionTitle = (title: string) => {
            y += 8
            doc.setFontSize(14)
            doc.setFont('helvetica', 'bold')
            doc.setTextColor('#000000')
            doc.text(title, margin, y)
            y += 2
            // Underline
            doc.setLineWidth(0.5)
            doc.setDrawColor(200, 200, 200)
            doc.line(margin, y, pageWidth - margin, y)
            y += 8
        }

        // --- HEADER ---
        doc.setFontSize(22)
        doc.setFont('helvetica', 'bold')
        doc.text("Albino M. Santos", margin, y)
        y += 8

        doc.setFontSize(12)
        doc.setFont('helvetica', 'normal')
        doc.setTextColor('#444444')
        const subtitle = currentLang.value === 'pt' ? 'Junior Pentester | Red Team Operator' : 'Junior Pentester | Red Team Operator'
        doc.text(subtitle, margin, y)
        y += 10

        // Contact Info (One line)
        doc.setFontSize(10)
        doc.setTextColor('#666666')
        const contactLine = `${data.contact.email} | ${data.contact.linkedin} | ${data.contact.github}`
        doc.text(contactLine, margin, y)
        y += 15

        // --- SUMMARY ---
        addSectionTitle(currentLang.value === 'pt' ? "Resumo" : "Summary")
        data.aboutOverview.forEach((p: string) => {
            addWrappedText(p, 10, 'normal', '#333333')
            y += 2
        })

        // --- EXPERIENCE ---
        addSectionTitle(currentLang.value === 'pt' ? "Experiência" : "Experience")

        data.experience.forEach((exp: any) => {
            // Check for page break
            if (y > 270) { doc.addPage(); y = 20; }

            doc.setFontSize(12)
            doc.setFont('helvetica', 'bold')
            doc.setTextColor('#000000')
            doc.text(exp.title, margin, y)

            doc.setFontSize(10)
            doc.setFont('helvetica', 'normal')
            doc.text(exp.company, margin + 80, y) // Right aligned-ish or just spaced

            y += 5
            doc.setFontSize(10)
            doc.setTextColor('#666666')
            doc.text(exp.duration, margin, y)
            y += 6

            exp.description.forEach((desc: string) => {
                if (y > 280) { doc.addPage(); y = 20; }
                const bullet = `• ${desc}`
                const lines = doc.splitTextToSize(bullet, contentWidth - 5)
                doc.setTextColor('#333333')
                doc.text(lines, margin + 5, y)
                y += (lines.length * 5) + 2
            })
            y += 6
        })

        // --- SKILLS ---
        if (y > 250) { doc.addPage(); y = 20; }
        addSectionTitle(currentLang.value === 'pt' ? "Competências" : "Skills")

        data.skillsCategories.forEach((cat: any) => {
            doc.setFontSize(11)
            doc.setFont('helvetica', 'bold')
            doc.setTextColor('#000000')
            doc.text(cat.title, margin, y)
            y += 6

            const skillText = cat.list.join(' • ')
            addWrappedText(skillText, 10, 'normal', '#333333')
            y += 4
        })

        // --- EDUCATION / CERTS ---
        if (y > 250) { doc.addPage(); y = 20; }
        addSectionTitle(currentLang.value === 'pt' ? "Formação & Certificações" : "Education & Certifications")

        data.certifications.forEach((cert: string) => {
            doc.setFontSize(10)
            doc.setTextColor('#333333')
            doc.text(`• ${cert}`, margin, y)
            y += 6
        })

        // Save
        doc.save(`CV_Albino_Santos_${currentLang.value.toUpperCase()}.pdf`)
    }

    return {
        generatePdf
    }
}
