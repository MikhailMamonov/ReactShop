using System;
using System.Collections.Generic;
using System.Text;

using FluentValidation;

using MediatR;
using ReactShop.Application.Responses;
using ReactShop.Domain.Entities;

namespace ReactShop.Application.Commands
{
    public class CreateProductCommand : IRequest<Product>
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public int Price { get; set; }
        public int CategoryId { get; set; }
        public string Image { get; set; }
    }

    public class CreateProductCommandValidator : AbstractValidator<CreateProductCommand>
    {
        public CreateProductCommandValidator()
        {
            RuleFor(c => c.Name).NotEmpty();
            RuleFor(c => c.CategoryId).NotEmpty();
        }
    }
}
