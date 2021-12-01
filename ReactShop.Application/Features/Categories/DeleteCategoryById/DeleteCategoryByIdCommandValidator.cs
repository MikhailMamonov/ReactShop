using FluentValidation;

using System;
using System.Collections.Generic;
using System.Text;

namespace ReactShop.Application.Features.Categories.DeleteCategoryById
{
    public class CreateCategoryCommandValidator : AbstractValidator<DeleteCategoryByIdCommand>
    {
        public CreateCategoryCommandValidator()
        {
            RuleFor(c => c.Id).NotEmpty();
        }
    }
}
