export const toTitleCase = (str: any) => {
    return str.replace(/\w\S*/g, (word: any) => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
  };

      export const labels = {
        resetTitle: "reset",
        closeTitle: "close",
        menuTitle: "accessibility menu",
        increaseText: "increase text size",
        decreaseText: "decrease text size",
        increaseTextSpacing: "increase text spacing",
        decreaseTextSpacing: "decrease text spacing",
        increaseLineHeight: "increase line height",
        decreaseLineHeight: "decrease line height",
        invertColors: "invert colors",
        grayHues: "gray hues",
        underlineLinks: "underline links",
        bigCursor: "big cursor",
        readingGuide: "reading guide",
        textToSpeech: "text to speech",
        speechToText: "speech to text",
        disableAnimations: "disable animations",
        hotkeyPrefix: "hotkey:",
      };
  
      export const titleCaseLabels = {
        resetTitle: toTitleCase(labels.resetTitle),
        closeTitle: toTitleCase(labels.closeTitle),
        menuTitle: toTitleCase(labels.menuTitle),
        increaseText: toTitleCase(labels.increaseText),
        decreaseText: toTitleCase(labels.decreaseText),
        increaseTextSpacing: toTitleCase(labels.increaseTextSpacing),
        decreaseTextSpacing: toTitleCase(labels.decreaseTextSpacing),
        increaseLineHeight: toTitleCase(labels.increaseLineHeight),
        decreaseLineHeight: toTitleCase(labels.decreaseLineHeight),
        invertColors: toTitleCase(labels.invertColors),
        grayHues: toTitleCase(labels.grayHues),
        underlineLinks: toTitleCase(labels.underlineLinks),
        bigCursor: toTitleCase(labels.bigCursor),
        readingGuide: toTitleCase(labels.readingGuide),
        textToSpeech: toTitleCase(labels.textToSpeech),
        speechToText: toTitleCase(labels.speechToText),
        disableAnimations: toTitleCase(labels.disableAnimations),
        hotkeyPrefix: toTitleCase(labels.hotkeyPrefix),
      };