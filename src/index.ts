import chalk from "chalk";

export default class ColorZilla {
    info(message: string, end: string = "\n") {
        process.stdout.write(chalk.blue(message) + end);
    }

    warn(message: string, end: string = "\n") {
        process.stdout.write(chalk.yellow(message) + end);
    }

    error(message: string, end: string = "\n") {
        process.stdout.write(chalk.red(message) + end);
    }

    success(message: string, end: string = "\n") {
        process.stdout.write(chalk.green(message) + end);
    }

    secondary(message: string, end: string = "\n") {
        process.stdout.write(chalk.gray(message) + end);
    }
}

export const zilla = new ColorZilla();
