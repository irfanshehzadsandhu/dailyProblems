# This problem was asked by Google.

# Suppose we represent our file system by a string in the following manner:

# The string "dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext" represents:

# dir
#     subdir1
#     subdir2
#         file.ext
# The directory dir contains an empty sub-directory subdir1 and a sub-directory subdir2 containing a file file.ext.

# The string "dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext" represents:

# dir
#     subdir1
#         file1.ext
#         subsubdir1
#     subdir2
#         subsubdir2
#             file2.ext
# The directory dir contains two sub-directories subdir1 and subdir2. subdir1 contains a file file1.ext and an empty second-level sub-directory subsubdir1. subdir2 contains a second-level sub-directory subsubdir2 containing a file file2.ext.

# We are interested in finding the longest (number of characters) absolute path to a file within our file system. For example, in the second example above, the longest absolute path is "dir/subdir2/subsubdir2/file2.ext", and its length is 32 (not including the double quotes).

# Given a string representing the file system in the above format, return the length of the longest absolute path to a file in the abstracted file system. If there is no file in the system, return 0.

# Note:

# The name of a file contains at least a period and an extension.

# The name of a directory or sub-directory will not contain a period.

# Sudo code of this is explain below in points
# 1 Split string on '\n' and create an array
# 2 Loop on each element of this array and push each element in a stack until file is found
# 3 If file is found ,pop each element from stack and join them to make a string.
# 4 Count the number of characters in that string and check longest number .  

def file?(s)
    s.include? '.'
end

def depth(s)
    s.scan(/\t/).count
end

def length_longest_path(input)
    longest = 0
    dir_stack = []

    all_dirs_and_files = input.split("\n")
    all_dirs_and_files.each do |current|
      puts '&&&&&&&&&&&&&&&&&&', current
      d = depth(current)
      puts 'UUUUUUUUUUUUUUUU', d 
      if file?(current)
          path = (dir_stack.take(d) + [current]).join('/').gsub(/\t/,'')
          length = path.length
          longest = length if length > longest
      else
          dir_stack[d] = current
      end

    end
    longest
end

result = length_longest_path "dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext"
puts result
