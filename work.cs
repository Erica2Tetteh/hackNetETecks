
using system;
class program
{
    static void Main(string[] args)
     {
        // Code goes here
    }

    

    static int[] ParseArray(string input)
    {
        string[] elements = input.Split(' ');
        int[] array = new int[elements.Length];

        for (int i = 0; i < elements.Length; i++)
        {
            int element;
            if (!int.TryParse(elements[i], out element))
            {
                Console.WriteLine("Invalid input. Please enter integers only.");
                return null;
            }

            array[i] = element;
        }

        return array;
    }
}