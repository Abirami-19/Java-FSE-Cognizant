/*
============================================================
Exercise 2 : Factory Method Pattern
============================================================

Objective:
To implement the Factory Method Design Pattern
for creating different types of documents.
*/

// ============================================================
// Document Interface
// ============================================================

interface Document {

    void open();

}


// ============================================================
// Concrete Document Classes
// ============================================================

class WordDocument implements Document {

    @Override
    public void open() {

        System.out.println("Microsoft Word Document Opened.");

    }

}

class PdfDocument implements Document {

    @Override
    public void open() {

        System.out.println("PDF Document Opened.");

    }

}

class ExcelDocument implements Document {

    @Override
    public void open() {

        System.out.println("Microsoft Excel Document Opened.");

    }

}


// ============================================================
// Abstract Factory Class
// ============================================================

abstract class DocumentFactory {

    public abstract Document createDocument();

}


// ============================================================
// Concrete Factory Classes
// ============================================================

class WordDocumentFactory extends DocumentFactory {

    @Override
    public Document createDocument() {

        return new WordDocument();

    }

}

class PdfDocumentFactory extends DocumentFactory {

    @Override
    public Document createDocument() {

        return new PdfDocument();

    }

}

class ExcelDocumentFactory extends DocumentFactory {

    @Override
    public Document createDocument() {

        return new ExcelDocument();

    }

}


// ============================================================
// Main Class
// ============================================================

public class FactoryMethodPatternExample {

    public static void main(String[] args) {

        DocumentFactory wordFactory = new WordDocumentFactory();
        Document word = wordFactory.createDocument();
        word.open();

        DocumentFactory pdfFactory = new PdfDocumentFactory();
        Document pdf = pdfFactory.createDocument();
        pdf.open();

        DocumentFactory excelFactory = new ExcelDocumentFactory();
        Document excel = excelFactory.createDocument();
        excel.open();

    }

}