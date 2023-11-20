// This problem involves playing cards: https://en.wikipedia.org/wiki/Standard_52-card_deck

// You will need to implement a function getCardValue

// You need to write assertions for your function to check it works in different cases

// Acceptance criteria:

// Given a card string in the format "A♠" (representing a card in blackjack),
// When the function getCardValue is called with this card string as input,
// Then it should return the numerical card value

// Handle Number Cards (2-10):
// Given a card with a rank between "2" and "10",
// When the function is called with such a card,
// Then it should return the numeric value corresponding to the rank (e.g., "5" should return 5).

// Handle Face Cards (J, Q, K):
// Given a card with a rank of "J," "Q," or "K",
// When the function is called with such a card,
// Then it should return the value 10, as these cards are worth 10 points each in blackjack.

// Handle Ace (A):
// Given a card with a rank of "A",
// When the function is called with an Ace,
// Then it should, by default, assume the Ace is worth 11 points, which is a common rule in blackjack.

// Handle Invalid Cards:
// Given a card with an invalid rank (neither a number nor a recognized face card),
// When the function is called with such a card,
// Then it should throw an error indicating "Invalid card rank."

function getCardValue(card) {
  cardSuit = card.slice(-1);
  cardRank = card.slice(0, -1);

  if (
    cardSuit == "♡" ||
    cardSuit == "♢" ||
    cardSuit == "♣" ||
    cardSuit == "♠"
  ) {
    switch (true) {
      case cardRank == "A":
        return 11;
        break;

      case cardRank > 1 && cardRank < 11:
        return 5;
        break;

      case cardRank == "J" || cardRank == "Q" || cardRank == "K":
        return 10;
        break;

      default:
        return `Invalid card rank.`;
        break;
    }
  } else {
    return "Invalid card suit. Please use one of the following: ♡,♢,♣,♠.";
  }
}

function assertion(card, targetOutput) {
  const currentOutput = getCardValue(card);
  console.assert(
    currentOutput === targetOutput,
    `Test for ${card}. Current output: %s, target output: %s`,
    currentOutput,
    targetOutput
  );
}

assertion("8♦", "Invalid card suit. Please use one of the following: ♡,♢,♣,♠.");
assertion("13♣", "Invalid card rank.");
assertion("A♠", 11);
assertion("4♢", 5);
assertion("10♡", 5);
assertion("Q♣", 10);
