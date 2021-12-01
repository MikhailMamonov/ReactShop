using System;
using FluentValidation;
using MediatR;

namespace ReactShop.Application.Features.Orders.UpdateOrder
{
    public class UpdateOrderCommandValidator : AbstractValidator<UpdateOrderCommand>
    {
        public UpdateOrderCommandValidator()
        {
            RuleFor(c => c.UserId).NotEmpty().WithMessage("Please specify a UserId"); ;
            RuleFor(c => c.OrderTotal).NotEmpty().WithMessage("Please specify a OrderTotal"); ;
            RuleFor(c => c.Address).NotEmpty().WithMessage("Please specify address"); ;
            RuleFor(c => c.Country).NotEmpty().WithMessage("Please specify a country"); ;
        }
    }
}
