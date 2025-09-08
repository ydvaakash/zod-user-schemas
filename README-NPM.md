# Zod User Schemas

Zod schemas for validation of user details, including firstName, lastName, userEmail, and userPassword.

## Field Validation Rules

### "firstName" and "lastName"

1. Must be a string.
2. Minimum 1 character.
3. Maximum 50 characters.
4. Must start with a letter.
5. Must contain only letters, spaces, apostrophes, or hyphens.
6. Must not have more than 2 consecutive occurrences of the same character.
7. Must not contain consecutive non-letter characters like --, '', or multiple spaces.
8. Must not contain numbers.
   <br>

### "userEmail"

1. Must be a string.
2. Must be structred like an email.
3. Must not contain spaces.
4. Must not exceed 254 characters.
5. Username in the email must not exceed 64 characters.
6. Must not contain consecutive dots, hyphens, or underscores.
7. Username in the email must not start with a special character.
8. Username in the email must not end with a special character.
   <br>

### "userPassword"

1. Must be a string.
2. Minimum 8 characters.
3. Maximum 26 characters.
4. Must contain at least one number (0–9).
5. Must contain at least one lowercase letter (a–z).
6. Must contain at least one uppercase letter (A–Z).
7. Must include only letters, numbers, and these special characters: @ # $ % & \*
8. Must not contain any whitespace characters.
9. Must not have more than 2 consecutive occurrences of the same character.
   <br>

## Schema Names

- firstNameZodSchema
- lastNameZodSchema
- userEmailZodSchema
- userPasswordZodSchema
  <br>

## TypeScript types for the respective schemas

- firstNameTypeFromZodSchema
- lastNameTypeFromZodSchema
- userEmailTypeFromZodSchema
- userPasswordTypeFromZodSchema
  <br>
