import * as z from "zod";

const userPasswordZodSchema = z
	.string()

	.trim()

	.min(8, { error: "Password must be minimum 8 characters long." })

	.max(26, { error: "Password must not exceed 26 characters." })

	.refine(
		(value) => {
			return /\d/.test(value);
		},
		{ error: "Password must contain at least one number (0–9)." },
	)

	.refine(
		(value) => {
			return /[a-z]/.test(value);
		},
		{ error: "Password must contain at least one lowercase letter (a–z)." },
	)

	.refine(
		(value) => {
			return /[A-Z]/.test(value);
		},
		{ error: "Password must contain at least one uppercase letter (A–Z)." },
	)

	.refine(
		(value) => {
			return /^[A-Za-z\d@#$%&*]+$/.test(value);
		},
		{
			error:
				"Password can only include letters, numbers, and these special characters: @ # $ % & *",
		},
	)

	.refine(
		(value) => {
			return !/\s/.test(value);
		},
		{ error: "Password must not contain any whitespace characters." },
	)

	.refine(
		(value) => {
			return !/(.)\1{2,}/.test(value);
		},
		{
			error:
				"Password must not have more than 2 consecutive occurrences of the same character.",
		},
	);

export { userPasswordZodSchema };
export type userPasswordTypeFromZodSchema = z.infer<
	typeof userPasswordZodSchema
>;
