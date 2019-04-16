const isPangram = (string) => {
	const alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	const stringStripped = string.toLowerCase().replace(/\s/g, '').split('');
	const found = alpha.every(r => stringStripped.includes(r))
	return found;

}

export { isPangram }
// vican22's solution
// const alpha = "abcdefghijklmnopqrstuvwxyz";

// export const isPangram = word => {
// 	word = word.toLowerCase();

// 	for (let i = 0; i < alpha.length; i++) {
// 		if (!word.includes(alpha[i])) {
// 			return false;
// 		}
// 	}

// 	return true;
// };

